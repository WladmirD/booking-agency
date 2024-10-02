import React, { useState } from 'react';
import styles from './index.module.css';
import BookingForm from './booking-form/booking-form';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    description: 'Beautiful beaches and temples',
    date: '2024-12-12',
    price: 1000,
    image: 'https://example.com/bali.jpg',
    duration: '5-7 Days',
    people: '2-5 People',
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'Vibrant city with rich culture',
    date: '2024-12-12',
    price: 1200,
    image: 'https://example.com/tokyo.jpg',
    duration: '4-6 Days',
    people: '1-3 People',
  },
  {
    id: 3,
    name: 'New York City, USA',
    description: 'Iconic city with world-class attractions',
    date: '2023-05-01',
    price: 1500,
    image: 'https://example.com/nyc.jpg',
    duration: '6-8 Days',
    people: '2-4 People',
  },
  {
    id: 4,
    name: 'Paris, France',
    description: 'Romantic city with stunning architecture',
    date: '2023-06-01',
    price: 1800,
    image: 'https://example.com/paris.jpg',
    duration: '5-7 Days',
    people: '2-5 People',
  },
  {
    id: 5,
    name: 'Sydney, Australia',
    description: 'Beautiful beaches and iconic landmarks',
    date: '2023-07-01',
    price: 2000,
    image: 'https://example.com/sydney.jpg',
    duration: '7-10 Days',
    people: '3-6 People',
  },
  {
    id: 6,
    name: 'Dubai, UAE',
    description: 'Modern city with stunning architecture and beaches',
    date: '2023-08-01',
    price: 2500,
    image: 'https://example.com/dubai.jpg',
    duration: '5-7 Days',
    people: '2-5 People',
  },
];

const packages = [
  {
    id: 1,
    name: 'Beach Getaway',
    description: 'Relax on the beach and enjoy water activities',
    date: '2023-03-01',
    price: 800,
    image: 'https://example.com/beach.jpg',
    duration: '4-6 Days',
    people: '1-3 People',
  },
  {
    id: 2,
    name: 'City Break',
    description: 'Explore the city and its cultural attractions',
    date: '2024-12-12',
    price: 1000,
    image: 'https://example.com/city.jpg',
    duration: '3-5 Days',
    people: '1-2 People',
  },
  {
    id: 3,
    name: 'Adventure Package',
    description: 'Go on a hike and enjoy outdoor activities',
    date: '2024-12-12',
    price: 1200,
    image: 'https://example.com/adventure.jpg',
    duration: '6-8 Days',
    people: '2-4 People',
  },
  {
    id: 4,
    name: 'Food and Wine',
    description: 'Taste local cuisine and wine',
    date: '2023-06-01',
    price: 1500,
    image: 'https://example.com/food.jpg',
    duration: '5-7 Days',
    people: '2-5 People',
  },
  {
    id: 5,
    name: 'Romance Package',
    description: 'Enjoy a romantic getaway with your partner',
    date: '2024-12-12',
    price: 2000,
    image: 'https://example.com/romance.jpg',
    duration: '4-6 Days',
    people: '2 People',
  },
  {
    id: 6,
    name: 'Winter Wonderland',
    description: 'Experience snow-covered landscapes and festive holidays',
    date: '2024-12-12',
    price: 3000,
    image: 'https://example.com/winter.jpg',
    duration: '7-10 Days',
    people: '3-6 People',
  },
];

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [isSearched, setIsSearched] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!startDate || !endDate) {
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const filteredDestinations = destinations.filter((destination) => {
      const destinationDate = new Date(destination.date);
      return destinationDate >= start && destinationDate <= end;
    });

    const filteredPackages = packages.filter((packageItem) => {
      const packageDate = new Date(packageItem.date);
      return packageDate >= start && packageDate <= end;
    });

    setFilteredDestinations(filteredDestinations);
    setFilteredPackages(filteredPackages);
    setIsSearched(true);
  };

  const handleNavigate = (id) => {
    navigate(`/destination-detail/${id}`);
  };
  return (
    <div className={styles.container}>
      <BookingForm
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onSearch={handleSearch}
      />
      {isSearched && (
        <div className={styles.resultsWrapper}>
          {filteredDestinations.length > 0 && <h2>Destinations</h2>}
          <div className={styles.destinations}>
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className={styles.destination}
                onClick={() => handleNavigate(destination.id)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className={styles.image}
                />
                <div className={styles.info}>
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <p>Price: ${destination.price}</p>
                </div>
              </div>
            ))}
          </div>
          {filteredPackages.length > 0 && <h2>Packages</h2>}
          <div className={styles.packages}>
            {filteredPackages.map((packageItem) => (
              <div key={packageItem.id} className={styles.package}>
                <img
                  src={packageItem.image}
                  alt={packageItem.name}
                  className={styles.image}
                />
                <div className={styles.info}>
                  <h3>{packageItem.name}</h3>
                  <p>{packageItem.description}</p>
                  <p>Price: ${packageItem.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
