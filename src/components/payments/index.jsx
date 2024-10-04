import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { destinations, packages } from '../utils/dummy-data';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.css';

const PaymentPage = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const booking =
    type === 'dest'
      ? destinations.find((dest) => dest.id === id)
      : packages.find((pkg) => pkg.id === id);
  const [formData, setFormData] = useState({
    ticketCount: 1,
    ticketPrice: booking.price,
    startDate: null,
    endDate: null,
    time: '',
    name: '',
    surname: '',
    telephone: '',
    email: '',
    totalPrice: booking.price,
    destId: id,
    type: type,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [isCvcVisible, setIsCvcVisible] = useState(false);

  const handleTicketChange = (increment) => {
    const newCount = Math.max(1, formData.ticketCount + increment);
    const newTotalPrice = newCount * Number(formData.ticketPrice);

    setFormData({
      ...formData,
      ticketCount: newCount,
      totalPrice: String(newTotalPrice),
    });
  };

  // Update formData for any input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Proceed to the next step
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleNavigate = () => {
    navigate(`/bookings`, { state: formData });
  };

  const handleSubmit = (e) => {
    // Mark payment as complete
    setIsPaymentComplete(true);
  };

  const timeref = useRef(null);

  const handleTimeSelect = () => {
    if (timeref.current) {
      timeref.current.showPicker();
    }
  };

  // If payment is complete, show the confirmation page
  if (isPaymentComplete) {
    return (
      <div className={styles.container}>
        <div className={styles.confirmationPage}>
          <div className={styles.iconContainer}>
            <span className={styles.icon}>✔</span>
          </div>
          <h1>Your Order is completed!</h1>
          <p>
            You will be receiving a confirmation email with your order details.
          </p>
          <br />
          <button
            type='submit'
            className={styles.nextStepBtn}
            onClick={handleNavigate}
          >
            Go To My Bookings
          </button>
        </div>
      </div>
    );
  }

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
  };

  const formatExpirationDate = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2');
  };

  return (
    <div className={styles.container}>
      <div className={styles.paymentPage}>
        {/* Booking Steps - Progress Tracker */}
        <div className={styles.steps}>
          <div
            className={`${styles.step} ${
              currentStep === 1 ? styles.active : ''
            }`}
          >
            <span>1</span> Booking Details
          </div>
          <div
            className={`${styles.step} ${
              currentStep === 2 ? styles.active : ''
            }`}
          >
            <span>2</span> Your Details
          </div>
          <div
            className={`${styles.step} ${
              currentStep === 3 ? styles.active : ''
            }`}
          >
            <span>3</span> Payment
          </div>
        </div>

        <div className={styles.mainContainer}>
          {/* Left Side - Booking Details or User Details */}
          <div className={styles.leftSide}>
            {/* Step 1: Booking Details */}
            {currentStep === 1 && (
              <div className={styles.bookingSection}>
                <h3>Booking Details</h3>

                {/* Date Range Picker */}
                <div className='relative'>
                  <label className='text-sm font-medium text-gray-700'>
                    When will you visit?
                  </label>
                  <div className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2'>
                    <DatePicker
                      selectsRange
                      startDate={formData.startDate}
                      endDate={formData.endDate}
                      onChange={(update) => {
                        setFormData({
                          ...formData,
                          startDate: update[0],
                          endDate: update[1],
                        });
                      }}
                      className={styles.selectField}
                      style={{ display: 'flex' }}
                      dateFormat='MMM d, yyyy'
                      placeholderText='Select a date range'
                      wrapperClassName='w-full'
                    />
                  </div>
                </div>

                {/* Time Selector */}
                <div className={styles.formGroup} onClick={handleTimeSelect}>
                  <label>Which time?</label>
                  <input
                    type='time'
                    name='time'
                    ref={timeref}
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>

                <div
                  className={`${styles.formGroup} ${styles.ticketSelection}`}
                >
                  <label>Select Your Tickets</label>
                  <div className={styles.ticketCounter}>
                    <button
                      onClick={() => handleTicketChange(-1)}
                      className={styles.ticketButton}
                    >
                      -
                    </button>
                    <span className={styles.ticketCount}>
                      {formData.ticketCount}
                    </span>
                    <button
                      onClick={() => handleTicketChange(1)}
                      className={styles.ticketButton}
                    >
                      +
                    </button>
                  </div>
                  <p className={styles.ticketPrice}>
                    $ {formData.ticketPrice} per ticket
                  </p>
                </div>
                <button className={styles.nextStepBtn} onClick={handleNextStep}>
                  Go to the Next Step
                </button>
              </div>
            )}

            {/* Step 2: User Details Section */}
            {currentStep === 2 && (
              <div className={styles.detailsSection}>
                <h3>Your Details</h3>
                <form onSubmit={handleNextStep}>
                  <div className={styles.formGroup}>
                    <label>Name</label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Surname</label>
                    <input
                      type='text'
                      name='surname'
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Telephone Number</label>
                    <input
                      type='tel'
                      name='telephone'
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type='submit' className={styles.nextStepBtn}>
                    Proceed to Payment
                  </button>
                </form>
              </div>
            )}

            {currentStep === 3 && (
              <div className={styles.paymentSection}>
                <h3>Payment</h3>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label>Credit Card Number</label>
                    <input
                      type='text'
                      placeholder='1234 5678 9101 3456'
                      maxLength={19}
                      onInput={(e) => {
                        const input = e.currentTarget;
                        input.value = formatCardNumber(input.value);
                      }}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Expiration Date</label>
                    <input
                      type='text'
                      placeholder='MM/YY'
                      maxLength={5}
                      onInput={(e) => {
                        const input = e.currentTarget;
                        input.value = formatExpirationDate(input.value);
                      }}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Card Security Code</label>
                    <input
                      type={isCvcVisible ? 'text' : 'password'}
                      placeholder='***'
                      maxLength={4}
                      pattern='\d{3}'
                      inputMode='numeric'
                      onBlur={() => setIsCvcVisible(false)}
                      onFocus={() => setIsCvcVisible(true)}
                      required
                    />
                  </div>
                  <button type='submit' className={styles.nextStepBtn}>
                    Complete Payment
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Side - Ticket Summary */}
          <div className={styles.rightSide}>
            {/* Ticket Summary Section (visible on all steps) */}
            <div className={styles.summarySection}>
              <h4>Your Tickets Overview</h4>
              <div className={styles.ticketDetails}>
                <p>
                  <strong>Destination:</strong> {booking.name}
                </p>
                <p>
                  <strong>Date:</strong>{' '}
                  {formData.startDate
                    ? formData.startDate.toLocaleDateString('en-US')
                    : 'Not selected'}{' '}
                  to{' '}
                  {formData.endDate
                    ? formData.endDate.toLocaleDateString('en-US')
                    : 'Not selected'}
                </p>
                <p>
                  <strong>Time:</strong> {formData.time || 'Not selected'}
                </p>
                <p>
                  <strong>Tickets:</strong> {formData.ticketCount} Adult (18+)
                </p>
                <hr />
                <p className={styles.totalPrice}>
                  <strong>Total Price:</strong> $
                  {Number(formData.totalPrice).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
