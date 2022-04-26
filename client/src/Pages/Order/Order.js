import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/order?email=${email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((error) => {
        console.log('error');
      });
  }, []);

  return (
    <div className='container mx-auto'>
      <h3>Your Orders History</h3>
      <h4>Total Order: {orders.length}</h4>
    </div>
  );
};

export default Order;
