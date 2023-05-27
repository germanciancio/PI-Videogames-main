import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";


const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h1>Bienvenido(a) a nuestro proyecto</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default LandingPage;
