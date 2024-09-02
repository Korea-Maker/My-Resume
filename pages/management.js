import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useAuthStore from '../stores/authStore';

function Management() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);  // State to handle loading status
  const { setAuthorized, clearToken, token } = useAuthStore((state) => ({
    setAuthorized: state.setAuthorized,
    clearToken: state.clearToken,
    token: state.token,
  }));

  useEffect(() => {
    const initializeAuth = async () => {
      if (!token) {
        // No token available, attempt to refresh
        await refreshAccessToken();
      } else {
        // Validate the existing token
        await checkAuthorization();
      }
      setLoading(false);  // Set loading to false after initialization
    };

    const checkAuthorization = async () => {
      try {
        const response = await axios.get('https://api.jongwook.xyz/authenticate', {  // Changed to actual secure endpoint
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        if (response.data.status === "성공") {
          setAuthorized(true);  // User is authorized
        } else {
          await refreshAccessToken();  // Attempt to refresh the token if not authorized
        }
      } catch (error) {
        console.error('Error checking authorization:', error);
        await refreshAccessToken();  // Refresh token on error
      }
    };

    const refreshAccessToken = async () => {
      try {
        const response = await axios.post('https://api.jongwook.xyz/auth/refresh', {}, { withCredentials: true });

        if (response.data.status === "성공") {
          useAuthStore.getState().setToken(response.data.access_token);  // Update token in store
          setAuthorized(true);  // Set authorized to true
        } else {
          clearToken();  // Clear token on failure
          router.push('/admin');  // Redirect to login
        }
      } catch (error) {
        console.error('Error refreshing token:', error);
        clearToken();
        router.push('/admin');
      }
    };

    initializeAuth();  // Initialize authentication check

  }, [token, setAuthorized, clearToken, router]);

  const handleLogout = () => {
    clearToken();
    router.push('/admin');
  };

  if (loading) {
    return <div>Loading...</div>;  // Display loading state while checking authentication
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
