import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Admin.module.css';
import axios from 'axios';
import useAuthStore from '../stores/authStore';

function Admin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const setToken = useAuthStore((state) => state.setToken);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      id: id,
      pw: password,
    };

    try {
      const response = await axios.post('https://api.jongwook.xyz/auth/login', requestData, { withCredentials: true });

      if (response.data.status === "성공") {
        setToken(response.data.access_token);  // Store JWT token in Zustand
        router.push('/management');
      } else {
        alert("Login failed!");
      }

    } catch (error) {
      console.error('Error during login:', error);
      alert("Login failed!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Admin</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="id" className={styles.label}>
              ID
            </label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
