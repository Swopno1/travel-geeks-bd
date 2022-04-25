import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useService from '../../hooks/useService';

const Service = () => {
  let { serviceID } = useParams();
  const [service] = useService(serviceID);

  return (
    <div className='container'>
      <div>
        <h2 className='mt-12 text-center text-3xl font-extrabold text-gray-900'>
          Service Details
        </h2>
        <h3>Service Name: {service?.name}</h3>
        <h3>Service Price: {service?.price}</h3>
        <Link to={`/checkout/${serviceID}`}>
          <button>Proceeed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
