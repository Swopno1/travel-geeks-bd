import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ service }) => {
  const { _id, name, img, description, price } = service;

  const navigate = useNavigate();

  const handleBookingBtn = (e) => {
    navigate(`/service/${_id}`);
  };

  return (
    <div className='w-[330px] h-[517px] border rounded-md shadow-md mx-auto'>
      <div className='image w-full h-[288px]'>
        <img className='p-0 rounded-t-md' src={img} alt='' />
      </div>
      <div className='p-3'>
        <h3 className='text-base font-bold pb-3'>{name}</h3>
        <p className='text-sm h-32'>
          {description.length > 250
            ? description.slice(0, 250) + '...'
            : description}
        </p>
        <div className='flex justify-between items-center pb-2'>
          <h4 className='font-bold'>
            Price: <span className='text-orange-500 text-xl'>${price}</span>
          </h4>
          <button
            className='px-4 py-1 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-400'
            onClick={() => handleBookingBtn(service)}
          >
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
