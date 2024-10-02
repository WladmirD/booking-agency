import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import image1 from '../../assets/reservation-images/bali.jpg';
import image2 from '../../assets/reservation-images/taj.jpg';
import image3 from '../../assets/reservation-images/dubai.jpg';
import image4 from '../../assets/reservation-images/banff.jpg';
import { destinations } from '../utils/dummy-data';

const DestinationsScreen = () => {
  const navigate = useNavigate();


  const handleClick = (id) => {
    navigate(`/destination-detail/${id}`);
  };

  return (
    <div>
      <div className={styles.tours}>
        <h1>Destinations</h1>
        <div className={styles.tourGrid}>
          {destinations.map((tour) => (
            <div key={tour.id} className={styles.tourItem} onClick={() => handleClick(tour.id)}>
              <div className={styles.imagePlaceholder}>
                <img src={tour.url} alt={tour.name} />
              </div>
              <h2>{tour.name}</h2>
              <p>
                From <span className={styles.price}>${tour.price}</span>
              </p>
              <p>
                <span className={styles.date}>{tour.date}</span> |
                <span className={styles.duration}>{tour.duration}</span> |
                <span className={styles.people}>{tour.people}</span>
              </p>
              <p className={styles.description}>{tour.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsScreen;
