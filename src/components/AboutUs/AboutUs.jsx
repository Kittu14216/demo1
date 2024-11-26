import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Our journey, our mission, and our team</p>
      </div>
      <div className="about-us-content">
        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            We aim to provide the highest quality seeds and gardening products
            to help you cultivate a vibrant and thriving garden. Our mission is
            to inspire and support gardeners at all levels, from beginners to
            experts.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Our Team</h2>
          <p>
            Our dedicated team of gardening enthusiasts and experts is here to
            help you every step of the way. We are passionate about plants and
            committed to offering the best customer service and advice.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance? Feel free to reach out to us at{" "}
            <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
