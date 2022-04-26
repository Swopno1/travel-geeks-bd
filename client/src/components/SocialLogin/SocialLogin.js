import React from 'react';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  let errorElement = '';

  if (error || error1) {
    errorElement = (
      <p className='text-danger'>
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (loading || loading1) {
    errorElement = <Loading></Loading>;
  }

  if (user || user1) {
    navigate(from ? from : '/', { replace: true });
  }

  return (
    <div className='min-h-full flex items-center justify-center pb-8 px-4'>
      <div className='max-w-md w-full space-y-8'>
        <div className='flex items-center'>
          <div className='h-px w-5/6 bg-orange-400 shadow-orange-400'></div>
          <p className='px-3'>or</p>
          <div className='h-px w-5/6 bg-orange-400 shadow-orange-400'></div>
        </div>
        <div>
          {errorElement}
          <button
            onClick={() => signInWithGoogle()}
            className='group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2'
          >
            <img
              style={{ width: '30px' }}
              src='https://i.ibb.co/17Gd0qw/google.png'
              alt=''
            />
            <span className='px-2'>Google Sign In</span>
          </button>
          <button
            onClick={() => signInWithGithub()}
            className='group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <img
              style={{ width: '30px' }}
              src='https://i.ibb.co/jZqFWxT/github.png'
              alt=''
            />
            <span className='px-2'>Github Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
