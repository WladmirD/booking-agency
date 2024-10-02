import React from 'react';
import styles from './index.module.css';
import BookingForm from './booking-form/booking-form';

const Home = () => {
  return (
    <div className={styles.container}>
      <BookingForm />
    </div>
  );
};

export default Home;
