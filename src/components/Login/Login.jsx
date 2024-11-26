import React, { useState } from "react";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./Login.module.css";

const AuthPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.authContainer} ${isActive ? styles.activ : ""}`}
      id="container"
    >
      <div className={`${styles.authFormContainer} ${styles.authSignUp}`}>
        <form>
          <h1>Create Account</h1>
          <div className={styles.authSocialIcons}>
            <a href="#" className={styles.icon}>
              <FaGooglePlusG />
            </a>
            <a href="#" className={styles.icon}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.icon}>
              <FaGithub />
            </a>
            <a href="#" className={styles.icon}>
              <FaLinkedinIn />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className={`${styles.authFormContainer} ${styles.authSignIn}`}>
        <form>
          <h1>Sign In</h1>
          <div className={styles.authSocialIcons}>
            <a href="#" className={styles.icon}>
              <FaGooglePlusG />
            </a>
            <a href="#" className={styles.icon}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.icon}>
              <FaGithub />
            </a>
            <a href="#" className={styles.icon}>
              <FaLinkedinIn />
            </a>
          </div>
          <span>or use your email for sign in</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className={styles.authToggleContainer}>
        <div className={styles.authToggle}>
          <div className={`${styles.authTogglePanel} ${styles.authToggleLeft}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className={styles.hidden} id="login" onClick={handleToggle}>
              Sign In
            </button>
          </div>
          <div
            className={`${styles.authTogglePanel} ${styles.authToggleRight}`}
          >
            <h1>Hello, Customer!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button
              className={styles.hidden}
              id="register"
              onClick={handleToggle}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
