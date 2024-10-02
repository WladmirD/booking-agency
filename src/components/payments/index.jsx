import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Import DatePicker from react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import styles from './index.module.css'; // Import the CSS module

const PaymentPage = () => {
    const [formData, setFormData] = useState({
        ticketCount: 2,
        ticketPrice: 32,
        startDate: null,
        endDate: null,
        time: '',
        name: '',
        surname: '',
        telephone: '',
        email: '',
        totalPrice: 64,
    });

    const [currentStep, setCurrentStep] = useState(1); // Manage which step is shown
    const [isPaymentComplete, setIsPaymentComplete] = useState(false); // Track payment completion

    const handleTicketChange = (increment) => {
        const newCount = Math.max(1, formData.ticketCount + increment);
        const newTotalPrice = newCount * formData.ticketPrice;
        setFormData({
            ...formData,
            ticketCount: newCount,
            totalPrice: newTotalPrice,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleNextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1); // Move to the next step
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mark payment as complete
        setIsPaymentComplete(true);
    };

    // If payment is complete, show the confirmation page
    if (isPaymentComplete) {
        return (
            <div className={styles.confirmationPage}>
                <div className={styles.iconContainer}>
                    <span className={styles.icon}>✔</span> {/* Checkmark icon */}
                </div>
                <h1>Your Order is complete!</h1>
                <p>You will be receiving a confirmation email with your order details.</p>
            </div>
        );
    }

    return (
        <div className={styles.paymentPage}>
            {/* Booking Steps - Progress Tracker */}
            <div className={styles.steps}>
                <div className={`${styles.step} ${currentStep === 1 ? styles.active : ''}`}>
                    <span>1</span> Booking Details
                </div>
                <div className={`${styles.step} ${currentStep === 2 ? styles.active : ''}`}>
                    <span>2</span> Your Details
                </div>
                <div className={`${styles.step} ${currentStep === 3 ? styles.active : ''}`}>
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
                            <div className={styles.formGroup}>
                                <label>When will you visit?</label>
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
                                    dateFormat="MMM d, yyyy"
                                    placeholderText="Select a date range"
                                />
                            </div>

                            {/* Time Selector */}
                            <div className={styles.formGroup}>
                                <label>Which time?</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className={styles.selectField}
                                />
                            </div>

                            <div className={`${styles.formGroup} ${styles.ticketSelection}`}>
                                <label>Select Your Tickets</label>
                                <div className={styles.ticketCounter}>
                                    <button onClick={() => handleTicketChange(-1)} className={styles.ticketButton}>
                                        -
                                    </button>
                                    <span className={styles.ticketCount}>{formData.ticketCount}</span>
                                    <button onClick={() => handleTicketChange(1)} className={styles.ticketButton}>
                                        +
                                    </button>
                                </div>
                                <p className={styles.ticketPrice}>$ {formData.ticketPrice} per ticket</p>
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
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Surname</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Telephone Number</label>
                                    <input
                                        type="tel"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className={styles.nextStepBtn}>
                                    Proceed to Payment
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Step 3: Payment Section */}
                    {currentStep === 3 && (
                        <div className={styles.paymentSection}>
                            <h3>Payment</h3>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label>Credit Card Number</label>
                                    <input type="text" placeholder="1234 5678 9101 3456" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Expiration Date</label>
                                    <input type="text" placeholder="MM/YY" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Card Security Code</label>
                                    <input type="text" placeholder="***" required />
                                </div>
                                <button type="submit" className={styles.nextStepBtn}>
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
                                <strong>Destination:</strong> Destination 1
                            </p>
                            <p>
                                <strong>Date:</strong>{' '}
                                {formData.startDate
                                    ? formData.startDate.toLocaleDateString('en-US')
                                    : 'Not selected'}{' '}
                                to {formData.endDate ? formData.endDate.toLocaleDateString('en-US') : 'Not selected'}
                            </p>
                            <p>
                                <strong>Time:</strong> {formData.time || 'Not selected'}
                            </p>
                            <p>
                                <strong>Tickets:</strong> {formData.ticketCount} Adult (18+)
                            </p>
                            <hr />
                            <p className={styles.totalPrice}>
                                <strong>Total Price:</strong> ${formData.totalPrice.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
