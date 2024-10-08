import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useAuthStore from '../stores/authStore';

function Management() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);  
  const { setAuthorized, clearToken, token, setToken } = useAuthStore((state) => ({
    setAuthorized: state.setAuthorized,
    clearToken: state.clearToken,
    token: state.token,
    setToken: state.setToken,
  }));

  useEffect(() => {
    const initializeAuth = async () => {
      if (!token) {
        await refreshAccessToken();
      } else {
        await checkAuthorization();
      }
      setLoading(false);
    };

    const checkAuthorization = async () => {
      try {
        const response = await axios.get('https://api.jongwook.xyz/auth/authenticate', {  
          headers: { 
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        if (response.data.status === "성공") {
          setAuthorized(true);  
        } else {
          await refreshAccessToken();  
        }
      } catch (error) {
        console.error('Error checking authorization:', error);
        await refreshAccessToken();  
      }
    };

    const refreshAccessToken = async () => {
      try {
        const response = await axios.post('https://api.jongwook.xyz/auth/refresh', {}, { withCredentials: true });

        if (response.data.status === "성공") {
          useAuthStore.getState().setToken(response.data.access_token);  
          setAuthorized(true);  
        } else {
          clearToken();  
          router.push('/admin');  
        }
      } catch (error) {
        console.error('Error refreshing token:', error);
        clearToken();
        router.push('/admin');
      }
    };

    initializeAuth();  

  }, []);

  const handleLogout = async () => {
    try{
      await axios.post('https://api.jongwook.xyz/auth/logout', {}, { withCredentials: true });
      clearToken();
      router.push('/admin');
    }
    catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (!useAuthStore.getState().authorized) {
    return <div>Unauthorized access. Redirecting...</div>;
  }

  return (
    <div>
      <h1>Management Page</h1>
      <p>This page is only accessible to authenticated users.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Management;
