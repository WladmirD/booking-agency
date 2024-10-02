import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
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
          {destinations.map((item) => (
            <div
              key={item.id}
              className={styles.tourItem}
              onClick={() => handleClick(item.id)}
            >
              <div className={styles.imagePlaceholder}>
                <img src={item.url} alt={item.name} />
              </div>
              <h2>{item.name}</h2>
              <p>
                From <span className={styles.price}>${item.price}</span>
              </p>
              <p>
                <span className={styles.date}>
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }).format(new Date(item.date))}
                </span>
                |<span className={styles.duration}>{item.duration}</span> |
                <span className={styles.people}>{item.people}</span>
              </p>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsScreen;
