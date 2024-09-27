import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../../assets/logo.svg';
// import styles from './header.module.css';

const Header = () => {
  return (
    <header className='bg-cover bg-center' style={{ backgroundColor: 'black' }}>
      <div className='container mx-auto py-4 px-6 flex justify-between items-center'>
        <Link to='/'>
          <img src={logoUrl} alt='logo' />
        </Link>

        <nav className='flex space-x-8 text-white'>
          <Link to='/' className='hover:text-orange-400'>
            Home
          </Link>
          <Link to='/destinations' className='hover:text-orange-400'>
            Destinations
          </Link>
          <Link to='/packages' className='hover:text-orange-400'>
            Packages
          </Link>
          <Link to='/booking' className='hover:text-orange-400'>
            Booking
          </Link>
          <Link to='/contact' className='hover:text-orange-400'>
            Contact Us
          </Link>
        </nav>

        <div className='flex space-x-4 items-center'>
          <div className='text-white'>Eng</div>
          <Link to='/login' className='text-white'>
            Login
          </Link>
          <Link
            to='/signup'
            className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
