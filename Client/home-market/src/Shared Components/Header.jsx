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


              {/* favorites withe logo lev  */}
          <li className="nav-item">
            <a className="nav-link d-flex " href="/Home">
              <div>
                <img style={{ width: "30px", height: "auto" }} alt="Furniture Logo" 
                src="https://e7.pngegg.com/pngimages/546/849/png-clipart-heart-logo-heart-love-text.png" />
              </div>   
                
              <span>Favorites</span>
            </a>
          </li>
          

       
      

          

        </ul>

            {/* module de connenexion */}
        <div className="navbar-nav border">
          <a className="nav-link d-flex" href="/Login">
              <span> Sign In</span>
          </a>
          <a className="nav-link" href="/Login">
              <div>
                <img style={{ width: "30px", height: "auto" }} alt="Furniture Logo" 
                src="https://w7.pngwing.com/pngs/240/151/png-transparent-user-account-profile-elasto-ecommerce-ui-flat-outline-icons-icon.png" />
              </div>  </a>
          <a className="nav-link" href="/Register">Sign Up</a>
        </div>


      </div>



    </header>
  );
};

export default Header;
