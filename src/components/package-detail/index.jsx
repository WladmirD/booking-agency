import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { packages } from '../utils/dummy-data';
import styles from './index.module.css';

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const package1 = packages.find((dest) => dest.id === id);
  const handleNavigate = () => {
    navigate(`/payments/${id}/pack`);
  };

  if (!package1) {
    return <h1>Package not found</h1>;
  }

  return (
    <div className={styles.detailPage}>
      <a href='/packages' className={styles.backButton}>
        ← Back
      </a>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={package1.url}
            alt={package1.name}
            className={styles.mainImage}
          />
          <div className={styles.img1}>
            <img src={package1.url1} alt='img' />
            <img src={package1.url1} alt='img' />
            <img src={package1.url1} alt='img' />
          </div>
        </div>
        <div className={styles.content}>
          <h1>{package1.name}</h1>
          <p className={styles.price}>from ${package1.price}</p>
          <p className={styles.description}>{package1.description}</p>

          <label>Select a date:</label>
          <input type='date' className={styles.datePicker} />

          <button className={styles.buyNowButton} onClick={handleNavigate}>
            Buy Now
          </button>
          <div className={styles.details}>
            <h2>Details</h2>
            <p>{package1.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
