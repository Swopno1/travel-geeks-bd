import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Checkout = () => {
  // const services = useServices([]);
  // let { serviceID } = useParams();

  // useEffect(() => {
  //   console.log(services);
  // }, [services]);

  // console.log(serviceID);

  return (
    <div className='container'>
      <div>
        <h1 className='text-center text-orange-500 text-5xl font-extrabold mt-6'>
          <Link to='/'>
            TravelGeeks<span className='text-black'>BD</span>
          </Link>
        </h1>
        <h2 className='mt-12 text-center text-3xl font-extrabold text-gray-900'>
          Checkout Page
        </h2>
      </div>
    </div>
  );
};

export default Checkout;

/*

id": 1,
    "name": "Arrange Group Tour",
    "price": 300,
    "description": "Buran Ghati Trek. There is not a single moment on this trek where you get frustrated. It is as if someone has pulled out all the best parts of our Himalayan tracks and sewn them together to make a perfect trek. We are going to Buran Ghati Trek in Himachal Pradesh, India to see all the wonderful moments.",
    "img": 

    */
