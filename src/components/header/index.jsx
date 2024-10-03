import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../../assets/logo.svg';
import styles from './index.module.css';

const Header = ({ toggleModal }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`bg-cover bg-center ${styles.container}`}>
      <div className='container mx-auto py-4 px-6 flex justify-between items-center'>
        <img
          src={logoUrl}
          alt='logo'
          className='hidden sm:inline-block h-8 w-8 sm:h-12 sm:w-12'
        />
        <nav className='hidden sm:flex space-x-8 text-#333333'>
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

        <button className='sm:hidden text-#333333' onClick={handleMenuToggle}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <div className='flex space-x-4 items-center'>
          <div
            className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500'
            onClick={toggleModal}
          >
            Login
          </div>
        </div>
      </div>
      {menuOpen && (
        <nav className='sm:hidden flex flex-col items-center bg-white text-#333333 space-y-4 p-4'>
          <Link
            to='/'
            className={`hover:text-orange-400 ${
              location.pathname === '/' ? styles.active : ''
            }`}
            onClick={handleMenuToggle}
          >
            Home
          </Link>
          <Link
            to='/destinations'
            className={`hover:text-orange-400 ${
              location.pathname === '/destinations' ? styles.active : ''
            }`}
            onClick={handleMenuToggle}
          >
            Destinations
          </Link>
          <Link
            to='/packages'
            className={`hover:text-orange-400 ${
              location.pathname === '/packages' ? styles.active : ''
            }`}
            onClick={handleMenuToggle}
          >
            Packages
          </Link>
          <Link
            to='/bookings'
            className={`hover:text-orange-400 ${
              location.pathname === '/bookings' ? styles.active : ''
            }`}
            onClick={handleMenuToggle}
          >
            Booking
          </Link>
          <Link
            to='/contact'
            className={`hover:text-orange-400 ${
              location.pathname === '/contact' ? styles.active : ''
            }`}
            onClick={handleMenuToggle}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
