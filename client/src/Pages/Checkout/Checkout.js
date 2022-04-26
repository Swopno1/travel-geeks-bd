import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useService from '../../hooks/useService';

const Checkout = () => {
  let { serviceID } = useParams();
  const [service] = useService(serviceID);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceID,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert('Your order booked!');
          e.target.reset();
        }
      });
  };

  return (
    <div className='container mx-auto'>
      <div>
        <h2 className='mt-12 text-center text-3xl font-extrabold text-gray-900'>
          Checkout Page
        </h2>
        <h3>Checkout for: {service?.name}</h3>
      </div>
      <div className='mx-auto w-1/2 my-3'>
        <form onSubmit={handlePlaceOrder}>
          <input
            className='w-full mb-2 border rounded shadow-sm py-1 px-2'
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={user?.displayName}
            readOnly
            required
          />
          <input
            className='w-full mb-2 border rounded shadow-sm py-1 px-2'
            type='text'
            name='email'
            id='email'
            placeholder='email'
            value={user?.email}
            readOnly
            required
          />
          <input
            className='w-full mb-2 border rounded shadow-sm py-1 px-2'
            type='text'
            name='service'
            id='service'
            placeholder='Service'
            value={service?.name}
            readOnly
            required
          />
          <input
            className='w-full mb-2 border rounded shadow-sm py-1 px-2'
            type='text'
            name='address'
            id='address'
            placeholder='Address'
            required
          />
          <input
            className='w-full mb-2 border rounded shadow-sm py-1 px-2'
            type='text'
            name='phone'
            id='phone'
            placeholder='Phone'
            required
          />
          <input
            className='bg-brand px-4 py-1 rounded shadow text-dark text-xl font-bold'
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
