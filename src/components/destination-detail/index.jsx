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

  console.log(destination)

  return (
    <div className={styles.detailPage}>
        <a href="/destinations" className={styles.backButton}>← Back</a>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={destination.url} alt={destination.name} />
          <div className = {styles.img1}>
          <img src = {destination.url1} alt="img" />
          <img src = {destination.url1} alt="img" />
          <img src = {destination.url1} alt="img" />
          </div>
        </div>
        <div className={styles.content}>
          <h1>{destination.name}</h1>
          <p className={styles.price}>from ${destination.price}</p>
          <p className={styles.description}>{destination.description}</p>

          <label>Select a date:</label>
          <input type="date" className={styles.datePicker} />

          <label>Select a time:</label>
          <input type="time" className={styles.timePicker} />

          <button className={styles.buyNowButton}>Buy Now</button>
          <div className={styles.details}>
            <h2>Details</h2>
                <p>{destination.detail}</p>
            </div> 
        </div>
      </div>
 
    </div>
  );
};

export default DestinationDetail;
