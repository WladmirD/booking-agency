import React, { useState, useEffect } from 'react';
import styles from './index.module.css'; // Import CSS module

const BookingPage = () => {
  // Dummy data for booked tickets (replace this with actual data or API call)
  const [tickets, setTickets] = useState([]);

  // Simulate fetching tickets after successful payment
  useEffect(() => {
    // Simulate API call to get booked tickets
    const bookedTickets = [
      {
        id: 1,
        tourName: 'Wine tasting In Tuscany',
        date: 'Fri, 23 Dec 2022',
        time: '15:00',
        paymentMethod: 'Paypal',
        price: '€86.00',
        status: 'Upcoming',
        imageUrl: 'https://via.placeholder.com/100x100', // Sample image URL
      },
      {
        id: 2,
        tourName: 'Wine tasting In Tuscany',
        date: 'Fri, 23 Dec 2022',
        time: '15:00',
        paymentMethod: 'Credit Card',
        price: '€86.00',
        status: 'Ended',
        imageUrl: 'https://via.placeholder.com/100x100', // Sample image URL
      },
    ];

    // Set tickets in state
    setTickets(bookedTickets);
  }, []);

  return (
    <div className={styles.bookingPage}>
      <h1>My Tickets</h1>

      {/* Tickets Table */}
      <div className={styles.ticketList}>
        {tickets.length === 0 ? (
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
  );
};

export default BookingPage;
