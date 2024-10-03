import React, { useState } from 'react';
import styles from './index.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let sanitizedValue = value;

    if (name === 'email') {
      // Allow @ and . symbols in the email field
      sanitizedValue = value.replace(/[^\w\s@.]/gi, '');
    } else {
      // Remove all special characters from other fields
      sanitizedValue = value.replace(/[^\w\s]/gi, '');
    }

    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      message: '',
      phone: '',
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contactContainer}>
        {/* Contact Details Section */}
        <div className={styles.contactInfo}>
          <h1>Get In Touch!</h1>
          <p>
            Fill up the form and our team will get back to you within 24 hours.
          </p>
          <div className={styles.contactDetails}>
            <p>
              <i className='fas fa-map-marker-alt'></i> Piazza Napoleone, Lucca,
              Tuscany
            </p>
            <p>
              <i className='fas fa-phone-alt'></i> +39 346 368 5708
            </p>
            <p>
              <i className='fas fa-envelope'></i> luxevoyage@gmail.com
            </p>
          </div>
        </div>

        <div className={styles.contactFormContainer}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor='name'>Name and Surname</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter your name and surname'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email address'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='phone'>Phone (optional)</label>
              <input
                type='number'
                id='phone'
                name='phone'
                placeholder='Enter your phone number'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <button type='submit' className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
