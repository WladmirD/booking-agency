import React from 'react';
import styles from './index.module.css';
import image1 from '../../assets/reservation-images/bali.jpg';
import image2 from '../../assets/reservation-images/taj.jpg';
import image3 from '../../assets/reservation-images/dubai.jpg';
import image4 from '../../assets/reservation-images/banff.jpg';

const DestinationsScreen = () => {
  const tours = [
    {
      id: 1,
      name: "Destination 1",
      price: "9999",
      date: "September 25th",
      duration: "3-10 Days",
      people: "10 People",
      description: "Destination number 1, here will be some description of location.",
      url: image1
    },
    {
      id: 2,
      name: "Destination 2",
      price: "9999",
      date: "September 25th",
      duration: "3-10 Days",
      people: "10 People",
      description: "Destination number 1, here will be some description of location.",
      url: image2
    },
    {
      id: 3,
      name: "Destination 3",
      price: "9999",
      date: "September 25th",
      duration: "3-10 Days",
      people: "10 People",
      description: "Destination number 1, here will be some description of location.",
      url: image3
    },
    {
      id: 4,
      name: "Destination 4",
      price: "9999",
      date: "September 25th",
      duration: "3-10 Days",
      people: "10 People",
      description: "Destination number 1, here will be some description of location.",
      url: image4
    },
    {
      id: 5,
      name: "Destination 5",
      price: "9999",
      date: "September 25th",
      duration: "3-10 Days",
      people: "10 People",
      description: "Destination number 1, here will be some description of location.",
      url: image1
    },
    {
      id: 6,
      name: "Destination 6",
      price: "9999",
      date: "September 25th",
      duration: "3-10 Days",
      people: "10 People",
      description: "Destination number 1, here will be some description of location.",
      url: image2
    },
    {
      id: 7,
      name: "Destination 7",
      price: "9999",
      date: "September 25th",
      duration: "3-10 Days",
      people: "10 People",
      description: "Destination number 1, here will be some description of location.",
      url: image3
    },
    {
      id: 8,
      name: "Destination 8",
      price: "9999",
      date: "September 25th",
      duration: "3-10 Days",
      people: "10 People",
      description: "Destination number 1, here will be some description of location.",
      url: image4
    }
  ];

  return (
    <div> 
      <section className={styles.tours}>
        <h1>Destinations</h1>
        <div className={styles.tourGrid}>
          {tours.map(tour => (
            <div key={tour.id} className={styles.tourItem}>
              <div className={styles.imagePlaceholder}>
                <img src={tour.url} alt={tour.name} />
              </div>
              <h2>{tour.name}</h2>
              <p>From <span className={styles.price}>${tour.price}</span></p>
              <p>
                <span className={styles.date}>{tour.date}</span> | 
                <span className={styles.duration}>{tour.duration}</span> | 
                <span className={styles.people}>{tour.people}</span>
              </p>
              <p className={styles.description}>{tour.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>)
};
  

export default DestinationsScreen;
