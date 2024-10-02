import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../../assets/logo.svg';
import styles from './index.module.css';

const Header = ({ toggleModal }) => {
  const location = useLocation();

  return (
    <header className={`bg-cover bg-center ${styles.container}`}>
      <div className='container mx-auto py-4 px-6 flex justify-between items-center'>
        <img src={logoUrl} alt='logo' style={{ width: '100px' }} />
        <nav className='flex space-x-8 text-white'>
          <Link
            to='/'
            className={`hover:text-orange-400 ${
              location.pathname === '/' ? styles.active : ''
            } ${styles.font}`}
          >
            Home
          </Link>
          <Link
            to='/destinations'
            className={`hover:text-orange-400 ${
              location.pathname === '/destinations' ? styles.active : ''
            } ${styles.font}`}
          >
            Destinations
          </Link>
          <Link
            to='/packages'
            className={`hover:text-orange-400 ${
              location.pathname === '/packages' ? styles.active : ''
            } ${styles.font}`}
          >
            Packages
          </Link>
          <Link
            to='/bookings'
            className={`hover:text-orange-400 ${
              location.pathname === '/bookings' ? styles.active : ''
            } ${styles.font}`}
          >
            Booking
          </Link>
          <Link
            to='/contact'
            className={`hover:text-orange-400 ${
              location.pathname === '/contact' ? styles.active : ''
            } ${styles.font}`}
          >
            Contact Us
          </Link>
        </nav>

        <div className='flex space-x-4 items-center'>
          <Link
            to='/signup'
            className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500'
            onClick={toggleModal}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
