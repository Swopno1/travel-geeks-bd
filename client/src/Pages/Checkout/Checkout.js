import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Checkout = () => {
  const [service, setService] = useState();
  let { serviceID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceID}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // console.log(serviceID);

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
