import React, { useState } from 'react';
import styles from './index.module.css';
import BookingForm from './booking-form/booking-form';
import { useNavigate } from 'react-router-dom';
import { destinations, packages } from '../utils/dummy-data';

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

  const handleNavigate = (id, route) => {
    navigate(`/${route}/${id}`);
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
      {isSearched &&
        (filteredDestinations.length > 0 || filteredPackages.length > 0) && (
          <div className={styles.resultsWrapper}>
            {filteredDestinations.length > 0 && <h2>Destinations</h2>}
            <div className={styles.destinations}>
              {filteredDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className={styles.destination}
                  onClick={() =>
                    handleNavigate(destination.id, 'destination-detail')
                  }
                >
                  <img
                    src={destination.url}
                    alt={destination.name}
                    className={styles.image}
                  />
                  <div className={styles.info}>
                    <h3>{destination.name}</h3>
                    <p>{destination.description}</p>
                    <p>
                      Price:
                      <div className={styles.price}>${destination.price}</div>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {filteredPackages.length > 0 && <h2>Packages</h2>}
            <div className={styles.packages}>
              {filteredPackages.map((packageItem) => (
                <div
                  key={packageItem.id}
                  className={styles.package}
                  onClick={() =>
                    handleNavigate(packageItem.id, 'package-detail')
                  }
                >
                  <img
                    src={packageItem.url}
                    alt={packageItem.name}
                    className={styles.image}
                  />
                  <div className={styles.info}>
                    <h3>{packageItem.name}</h3>
                    <p>{packageItem.description}</p>
                    <p>
                      Price:
                      <div className={styles.price}>${packageItem.price}</div>
                    </p>
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
