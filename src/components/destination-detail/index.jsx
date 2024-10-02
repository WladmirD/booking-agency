// src/components/DestinationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './index.module.css';// Import the related CSS module
import { destinations } from '../utils/dummy-data';

const DestinationDetail = () => {
  const { id } = useParams(); // Get destination ID from the route parameters

  // Find the correct destination by its ID
  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return <h1>Destination not found</h1>;
  }

  return (
    <div className={styles.detailPage}>
      <div className={styles.container}>
        <a href="/destinations" className={styles.backButton}>← Back</a>
        <div className={styles.imageWrapper}>
          <img src={destination.url} alt={destination.name} />
        </div>
        <div className={styles.content}>
          <h1>{destination.name}</h1>
          <p className={styles.price}>from {destination.price}</p>
          <p className={styles.description}>{destination.description}</p>

          <label>Select a date:</label>
          <input type="date" className={styles.datePicker} />

          <label>Select a time:</label>
          <select className={styles.timePicker}>
            <option>Select the time</option>
          </select>

          <button className={styles.buyNowButton}>Buy Now</button>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Details</h2>
        <p>{destination.details}</p>
      </div>
    </div>
  );
};

export default DestinationDetail;
