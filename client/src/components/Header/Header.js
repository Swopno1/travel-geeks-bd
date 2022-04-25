import React from 'react';
import Nav from '../Nav/Nav';
import { Link, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    Navigate('/');
  };

  return (
    <header className='w-full bg-slate-800 shadow-lg'>
      <div className='top-bar container mx-auto flex justify-between items-center border-b border-b-[rgba(255,255,255,0.5)] py-4'>
        <div className='main-logo w-1/5'>
          <Link to='/'>
            <h1 className='text-brand text-3xl font-extrabold '>
              TravelGeeks<span className='text-white'>BD</span>
            </h1>
          </Link>
        </div>

        <div className='search-box w-3/5 text-center px-4 hidden sm:block'>
          <input
            className='px-4 py-1 rounded-full w-4/6 text-lg'
            type='text'
            name='search-box'
            id='search-box'
            placeholder='Search Anything'
          />
        </div>
        <div className='user-menu text-right flex justify-end w-1/5 text-white'>
          {user?.email === 'amirhossain.limon@gmail.com' && (
            <>
              <Link className='pr-2' to='/addservice'>
                Add
              </Link>
              <Link className='pr-2' to='/manageservices'>
                Manage
              </Link>
            </>
          )}
          {user ? (
            <>
              <button onClick={handleSignOut}>Sign Out</button>
            </>
          ) : (
            <>
              <Link to='/signin'>SignIn</Link>
              <Link className='ml-4' to='/register'>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
      <Nav></Nav>
    </header>
  );
};

export default Header;
