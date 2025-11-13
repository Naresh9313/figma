import React from "react";
import "./Practice.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiLoveHowl } from "react-icons/gi";

function Practice() {
  return (
    <div className="homepage1">
      <div className="top-banner1">
        <GiLoveHowl /> Coup de cœur ! La route des Vins de Bourgogne →
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-3 px-4">
          <a className="navbar-brand fw-bold fs-3 text-white" href="*">
            Riverly
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="/">
                  Destinations
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="/">
                  Idées séjours
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="/">
                  Nos bateaux
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="/">
                  L’expérience Riverly
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-warning" href="/">
                  Bons plans 💝
                </a>
              </li>
              <li className="nav-item mx-2">
                <button className="btn btn-success">Devis</button>
              </li>
              <li className="nav-item mx-2">
                <button className=" btn btn-success">Réservation rapide</button>
              </li>
              <li className="nav-item mx-2 btn btn-outline-light">
                +33 35 77 77 77
              </li>
            </ul>
          </div>
        </nav>
        
      <header className="hero-section1 text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold display-5">
          Vivez la croisière fluviale, autrement.
        </h1>
        <p className="lead mt-3 w-75 mx-auto">
          Partez sans permis à la découverte des rivières et canaux de France et d'Europe.
          Naviguez à votre rythme, partagez des moments précieux en famille ou entre amis,
          reconnectez-vous à la nature et redécouvrez ce qui vous lie.
        </p>
        <img
          src=""
          alt=""
          className="hero-image mt-4 rounded shadow"
          style={{ maxWidth: "800px", width: "90%" }}
        />
      </header>
      </div>
    </div>
  );
}

export default Practice;
