import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

      {/* Logo de l'application */}
        <a className="navbar-brand" href="/"> HOME MARKET Logo</a>

        <ul className="navbar-nav">


          {/* MENU COMMUN A TTE LES PAGES  */}

        {/* gerer les nav et link */}
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Search">Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Selling">Sell Furniture  </a>
          </li>


        {/* autre option avec link : ne recharge pas la page */}
          <li className="nav-item">
            <Link to="/" className="nav-link">Home1</Link>
          </li>
          <li className="nav-item">
            <Link to="/Search" className="nav-link">Search2  </Link>
          </li>
      

          

        </ul>

            {/* module de connenexion */}
        <div className="navbar-nav">
          <a className="nav-link" href="/Login">Sign In</a>
          <a className="nav-link" href="/signup">S'inscrire</a>
        </div>


      </div>



    </header>
  );
};

export default Header;
