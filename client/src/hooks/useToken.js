import { useEffect, useState } from 'react';

const useToken = (user) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const email = user?.user?.email;

    if (email) {
      fetch('https://radiant-wildwood-96648.herokuapp.com/signin', {
        method: 'POST',
        headers: {
          'content-type': 'Application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data.accessToken);
          localStorage.setItem('accessToken', data.accessToken);
        });
    }
  }, [user]);

  return token;
};

export default useToken;
