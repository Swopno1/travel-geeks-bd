import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const quickLinks = [
  { id: 1, name: 'Contact', href: '/contact' },
  { id: 2, name: 'Privacy', href: '/privacy' },
  { id: 3, name: 'Terms', href: '/terms' },
  { id: 4, name: 'About', href: '/about' },
];

const Footer = () => {
  return (
    <footer className='w-full bg-orange-400 text-white'>
      <div className='footer container mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 h-36 items-center'>
        <p className='copyright-text text-center md:text-left'>
          &copy; {new Date().getFullYear()} TravelGeeksBd All Right Reserved
        </p>
        <div className='quick-link'>
          <ul className='flex md:block lg:flex justify-center text-center'>
            {quickLinks.map((item) => (
              <li className='px-4 font-bold' key={item.id}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='social-icon mx-auto md:text-right flex justify-end'>
          <a
            className='pl-3 text-2xl'
            href='https://www.facebook.com/groups/tgeeksbd'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebook />
          </a>
          <a className='pl-3 text-2xl' href='/'>
            <FaInstagram />
          </a>
          <a className='pl-3 text-2xl' href='/'>
            <FaInstagram />
          </a>
          <a className='pl-3 text-2xl' href='/'>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
