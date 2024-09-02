import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useAuthStore from '../stores/authStore';  // Import Zustand store

function Management() {
  const router = useRouter();
  const { token, authorized, setAuthorized, clearToken } = useAuthStore((state) => ({
    token: state.token,
    authorized: state.authorized,
    setAuthorized: state.setAuthorized,
    clearToken: state.clearToken,
  }));

  useEffect(() => {
    const checkAuthorization = async () => {
      if (!token) {
        console.warn('No token found - redirecting to login');
        router.push('/admin');
        return;
      }

      try {
        const response = await axios.get('https://api.jongwook.xyz/auth/protected', {
          headers: { Authorization: `Bearer ${token}` }, // Use token from Zustand
          withCredentials: true,
        });

        console.log('Authorization response:', response.data);

        if (response.data.status === "성공") {
          setAuthorized(true); // Update Zustand's authorized state
        } else {
          console.warn('Unauthorized access - clearing token and redirecting to login');
          clearToken(); // Clear token from Zustand
          router.push('/admin');
        }
      } catch (error) {
        console.error('Error checking authorization:', error.response ? error.response.data : error);
        clearToken(); // Clear token on error
        router.push('/admin');
      }
    };

    checkAuthorization();
  }, [token, router, setAuthorized, clearToken]); // Dependencies to re-run if token changes

  const handleLogout = () => {
    clearToken();  // Clear JWT token from Zustand
    router.push('/admin');  // Redirect to the login page
  };

  if (!authorized) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Management Page</h1>
      <p>This page is only accessible to authenticated users.</p>
      <button onClick={handleLogout}>Logout</button> {/* Logout button */}
    </div>
  );
}

export default Management;
