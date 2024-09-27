import React from 'react';
import styles from './index.module.css';
import BookingForm from './booking-form/booking-form';

const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <BookingForm />
    </div>
  );
};

export default Home;
