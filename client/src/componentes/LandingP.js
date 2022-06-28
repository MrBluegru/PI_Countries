import React from "react";
import "../styles/landingP.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="letras">Welcome to my Country App</h1>
      <Link to="/home">
        <button className="btn-landing">Go!</button>
      </Link>
      <a className="link-name" href="https://www.linkedin.com/in/mrbluegru/" target="_blank" rel="noopener noreferrer"> by Mr. Blue </a>
    </div>
  );
};

export default LandingPage;
