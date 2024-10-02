// src/components/LoginModal.js
import React from 'react';
import styles from './index.module.css'; // Importing as a CSS module

function LoginModal({ toggleModal }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event) => {
    const sanitizedEmail = event.target.value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s@.]/gi, '');
    setEmail(sanitizedEmail);
  };

  const handlePasswordChange = (event) => {
    const sanitizedPassword = event.target.value
      .trim()
      .replace(/[^\w\s]/gi, '');
    setPassword(sanitizedPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the login API with the sanitized data
    console.log('Login data:', email, password);
  };

  return (
    <>
      <div className={styles.loginModalOverlay}>
        <div className={styles.loginModal}>
          <div className={styles.loginContainer}>
            {/* Close button should call toggleModal */}
            <div className={styles.closeBtn} onClick={toggleModal}>
              &times;
            </div>
            <h2 className={styles.modalTitle}>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor='email' className={styles.label}>
                  Email Address
                </label>
                <input
                  id='email'
                  type='email'
                  placeholder='Enter your email address'
                  required
                  className={styles.input}
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='password' className={styles.label}>
                  Password
                </label>
                <div className={styles.passwordContainer}>
                  <input
                    id='password'
                    type='password'
                    placeholder='Enter your password'
                    required
                    className={styles.input}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span className={styles.togglePassword}>👁️</span>
                </div>
              </div>
              <div className={styles.forgotPassword}>Forgot your password?</div>
              <button type='submit' className={styles.loginBtn}>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
