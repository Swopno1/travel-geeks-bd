import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
  const [services, setService] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure to delete this item?');
    if (proceed) {
      const url = `https://radiant-wildwood-96648.herokuapp.com/service/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setService(remaining);
        });
    }
  };

  return (
    <div className='container mx-auto'>
      <h2 className='text-center'>Manage Your Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h4>
            {service.name}{' '}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
