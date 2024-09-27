// src/components/LoginModal.js
import React from 'react';
import styles from './index.module.css'; // Importing as a CSS module

function LoginModal({ toggleModal, showModal }) {  // Ensure toggleModal is passed as a prop
  return (
    <>
      {showModal && <div className={styles.loginModalOverlay}>
        <div className={styles.loginModal}>
          <div className={styles.loginContainer}>
            {/* Close button should call toggleModal */}
            <div className={styles.closeBtn} onClick={toggleModal}>
              &times;
            </div>
            <h2 className={styles.modalTitle}>Login</h2>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <div className={styles.passwordContainer}>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className={styles.input}
                  />
                  <span className={styles.togglePassword}>👁️</span>
                </div>
              </div>
              <div className={styles.forgotPassword}>Forgot your password?</div>
              <button type="submit" className={styles.loginBtn}>Sign In</button>
            </form>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default LoginModal;
