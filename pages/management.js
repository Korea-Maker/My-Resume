import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function Management() {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await axios.get('https://api.jongwook.xyz/auth/protected', { withCredentials: true });
        console.log('Authorization response:', response.data);

        if (response.data.status === "성공") {
          setAuthorized(true);
        } else {
          console.warn('Unauthorized access - redirecting to login');
          router.push('/admin');
        }
      } catch (error) {
        console.error('Error checking authorization:', error.response ? error.response.data : error);
        router.push('/admin');
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
