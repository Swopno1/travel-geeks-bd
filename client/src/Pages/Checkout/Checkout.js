import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useService from '../../hooks/useService';
import useServices from '../../hooks/useServices';

const Checkout = () => {
  let { serviceID } = useParams();
  const [service] = useService(serviceID);

  return (
    <div className='container'>
      <div>
        <h2 className='mt-12 text-center text-3xl font-extrabold text-gray-900'>
          Checkout Page
        </h2>
        <h3>Service Name: {service?.name}</h3>
        <h3>Service Price: {service?.price}</h3>
      </div>
    </div>
  );
};

export default Checkout;
