import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useAuthStore from '../stores/authStore';
import cookies from 'js-cookie';

function Management() {
  const router = useRouter();
  const { setAuthorized, clearToken, token } = useAuthStore((state) => ({
    setAuthorized: state.setAuthorized,
    clearToken: state.clearToken,
    token: state.token,
  }));

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await axios.get('https://api.jongwook.xyz/auth/protected', {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        if (response.data.status === "성공") {
          setAuthorized(true);
        } else {
          await refreshAccessToken();  // Attempt to refresh the token
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
          useAuthStore.setState({ token: response.data.access_token, authorized: true });
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

    if (!token) {
      refreshAccessToken();  // Immediately try to refresh if no token in memory
    } else {
      checkAuthorization();
    }
  }, [token]);  // Re-run when token changes

  const handleLogout = () => {
    clearToken();
    router.push('/admin');
  };

  if (!useAuthStore.getState().authorized) {
    return <div>Loading...</div>;
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
