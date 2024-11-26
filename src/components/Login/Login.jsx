import React, { useState } from "react";
// import Logo from "../../assets/logo.png";
import GoogleSvg from "../../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import styles from "./Login.module.css";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className={styles.loginMain}>
      <div className={styles.loginRight}>
        <div className={styles.loginRightContainer}>
          {/* <div className={styles.loginLogo}>
            <img src={Logo} alt="Logo" />
          </div> */}
          <div className={styles.loginCenter}>
            <h2>{isSignUp ? "Create an Account" : "Welcome back!"}</h2>
            <p>
              {isSignUp
                ? "Sign up with your details"
                : "Please enter your details"}
            </p>
            <form>
              <input type="email" placeholder="Email" />
              <div className={styles.passInputDiv}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              {isSignUp && (
                <div className={styles.passInputDiv}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                  />
                  {showConfirmPassword ? (
                    <FaEyeSlash
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  ) : (
                    <FaEye
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  )}
                </div>
              )}
              <div className={styles.loginCenterOptions}>
                <div className={styles.rememberDiv}>
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    {isSignUp ? "Sign up with Phone" : "Remember for 30 days"}
                  </label>
                </div>
                {!isSignUp && (
                  <a href="#" className={styles.forgotPassLink}>
                    Forgot password?
                  </a>
                )}
              </div>
              <div className={styles.loginCenterButtons}>
                <button type="button">{isSignUp ? "Sign Up" : "Log In"}</button>
                <button type="button">
                  <img src={GoogleSvg} alt="Google Icon" />
                  {isSignUp ? "Sign Up with Google" : "Log In with Google"}
                </button>
              </div>
            </form>
          </div>

          <p className={styles.loginBottomP}>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <a href="#" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? " Log In" : " Sign Up"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
