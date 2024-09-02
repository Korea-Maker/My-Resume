import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useAuthStore from '../stores/authStore';  // Import Zustand store
import cookies from 'js-cookie'; // Import cookie handling library

function Management() {
  const router = useRouter();
  const { setAuthorized, clearToken } = useAuthStore((state) => ({
    setAuthorized: state.setAuthorized,
    clearToken: state.clearToken,
  }));

  useEffect(() => {
    const checkAuthorization = async () => {
      // Retrieve token from cookies
      const token = cookies.get('token');  // Use cookies to get the JWT token

      if (!token) {
        console.warn('No token found - redirecting to login');
        router.push('/admin');
        return;
      }

      try {
        const response = await axios.get('https://api.jongwook.xyz/auth/protected', {
          headers: { Authorization: `Bearer ${token}` }, // Use token from cookies
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
  }, []); // Empty dependency array ensures this runs once on mount

  const handleLogout = () => {
    clearToken();  // Clear JWT token from Zustand
    cookies.remove('token'); // Remove the token from cookies
    router.push('/admin');  // Redirect to the login page
  };

  if (!useAuthStore.getState().authorized) {
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