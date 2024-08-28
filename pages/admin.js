import React, { useState } from 'react';  
import styles from '../styles/Admin.module.css'; // CSS 모듈을 임포트
import axios from 'axios';

function Admin() {  
  const [id, setId] = useState('');  
  const [password, setPassword] = useState('');  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    
    // Debugging
    console.log('ID:', id);  
    console.log('Password:', password);
    const requestData = {
      "id": id,
      "pw": password
    };

    try {
      response = await axios.post('https://api.jongwook.xyz/auth', requestData);
      console.log(response.data); // Debugging
      }catch(error){
        console.log(error);
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