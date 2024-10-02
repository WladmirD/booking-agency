// src/components/DestinationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './index.module.css';// Import the related CSS module

const DestinationDetail = () => {
  const { id } = useParams(); // Get destination ID from the route parameters

  // Simulated data based on ID
  const destinations = [
    {
      id: 1,
      name: "Lucca Bike Tour",
      price: "34 €",
      description: "Lucca is known for its historical charm, beautiful bike routes...",
      imgUrl: "/path-to-image/bike-tour.jpg",
      details: "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text..."
    },
    // More destinations can be added here
  ];

  // Find the correct destination by its ID
  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return <h1>Destination not found</h1>;
  }

  return (
    <div className={styles.detailPage}>
      <div className={styles.container}>
        <a href="/" className={styles.backButton}>← Back</a>
        <div className={styles.imageWrapper}>
          <img src={destination.imgUrl} alt={destination.name} />
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
            {/* Add more time options here */}
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
