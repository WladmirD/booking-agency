import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { destinations, packages } from '../utils/dummy-data';
import styles from './index.module.css';

const BookingPage = () => {
  const location = useLocation();
  const state = location.state;
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (state && state.type) {
      if (state.type === 'dest') {
        const destination = destinations.find((d) => d.id === state.destId);

        if (destination) {
          const newTicket = {
            id: Date.now(),
            tourName: destination.name,
            paymentMethod: 'Credit Card',
            price: state.totalPrice,
            status: 'Upcoming',
            date: state.startDate
              ? state.startDate.toLocaleDateString()
              : 'N/A',
            time: state.time || 'N/A',
            imageUrl: destination.url,
          };

          setTickets((prevTickets) => [...prevTickets, newTicket]);
        } else {
          console.warn(`Destination with id ${state.destId} not found.`);
        }
      } else if (state.type === 'pack') {
        const packageItem = packages.find((p) => p.id === state.destId);

        if (packageItem) {
          const newTicket = {
            id: Date.now(),
            tourName: packageItem.name,
            paymentMethod: 'Credit Card',
            price: state.totalPrice,
            status: 'Upcoming',
            date: state.startDate
              ? state.startDate.toLocaleDateString()
              : 'N/A',
            time: state.time || 'N/A',
            imageUrl: packageItem.url,
          };

          setTickets((prevTickets) => [...prevTickets, newTicket]);
        } else {
          console.warn(`Package with id ${state.id} not found.`);
        }
      }
    } else {
      console.warn('Invalid state:', state);
    }
  }, [state]);

  return (
    <div className={styles.container}>
      <div className={styles.bookingPage}>
        <h1>My Tickets</h1>

        {/* Tickets Table */}
        <div className={styles.ticketList}>
          {tickets && tickets.length === 0 ? (
            <p>No tickets booked yet.</p>
          ) : (
            <table className={styles.ticketTable}>
              <thead>
                <tr>
                  <th>Tour Name</th>
                  <th>Payment Method</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td>
                      <div className={styles.ticketDetails}>
                        <img
                          src={ticket.imageUrl}
                          alt={ticket.tourName}
                          className={styles.ticketImage}
                        />
                        <div>
                          <p className={styles.tourName}>{ticket.tourName}</p>
                          <p>
                            {ticket.date} <br /> {ticket.time}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>{ticket.paymentMethod}</td>
                    <td>{ticket.price}</td>
                    <td>
                      <span
                        className={
                          ticket.status === 'Upcoming'
                            ? styles.statusUpcoming
                            : styles.statusEnded
                        }
                      >
                        {ticket.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
