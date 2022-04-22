import React from 'react';
import useServices from '../../hooks/useServices';
import Card from '../Card/Card';

const Services = () => {
  const services = useServices([]);

  return (
    <section
      className='services container mx-auto my-12
    '
    >
      <h2 className='text-4xl text-center font-semibold mb-12'>
        Featured Services
      </h2>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
        {services.map((service) => (
          <Card service={service} key={service._id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
