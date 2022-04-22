import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'Application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className='container mx-auto text-center'>
      <form
        className='w-2/3 flex flex-col mx-auto my-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className='mb-2 border p-1'
          placeholder='Name'
          {...register('name', { required: true })}
        />
        <textarea
          className='mb-2 border p-1'
          placeholder='Description'
          {...register('description')}
        />
        <input
          className='mb-2 border p-1'
          placeholder='Price'
          {...register('price', { required: true, min: 0 })}
        />
        <input
          className='mb-2 border p-1'
          placeholder='Image Link'
          {...register('img')}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className='border bg-orange-500 text-white text-lg font-semibold'
          type='submit'
          value='Add Service'
        />
      </form>
    </div>
  );
};

export default AddService;
