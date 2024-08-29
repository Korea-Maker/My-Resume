import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function Management() {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();  // Hook to programmatically navigate

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        // Make a request to the protected route with credentials included
        const response = await axios.get('https://api.jongwook.xyz/auth/protected', { withCredentials: true });
        console.log('Authorization response:', response.data); // Debugging output

        if (response.data.status === "성공") {
          setAuthorized(true);  // User is authorized
        } else {
          console.warn('Unauthorized access - redirecting to login');
          router.push('/admin');  // Redirect to login page
        }
      } catch (error) {
        console.error('Error checking authorization:', error.response ? error.response.data : error);
        router.push('/admin');  // Redirect to login page
      }
    };

    checkAuthorization();
  }, []);

  if (!authorized) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Management Page</h1>
      <p>This page is only accessible to authenticated users.</p>
    </div>
  );
}

export default Management;
