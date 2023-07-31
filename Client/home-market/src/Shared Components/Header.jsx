import {React} from 'react';
import { Link } from 'react-router-dom';
 import {   Dropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoginOut } from '../Hooks';
 
 
 
  

const Header = () => {

  const {loggedUser,logout} = useLoginOut();
// pour gerrer le modal account : 

 
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
          

          {/* autre option avec link : ne recharge pas la page 
          Mias pr l'instant Home me fait des pblm   
          */}
          {/* <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/Search" className="nav-link">Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/Selling" className="nav-link">Sell Furniture </Link>
          </li>



              {/* favorites withe logo lev  */}
              <li className="nav-item">
                <a className="nav-link d-flex " href="/Register">
                  {/* coder cette partie  */}
                  <div>
                    <img style={{ width: "30px", height: "auto" }} alt="Furniture Logo" 
                    src="https://e7.pngegg.com/pngimages/546/849/png-clipart-heart-logo-heart-love-text.png" />
                  </div>   
                    
                  <span>Favorites</span>
                </a>
              </li>
              

       
      

          

        </ul>

            {/* module de connenexion */}
        {loggedUser ? 
        <Dropdown>
              <Dropdown.Toggle variant="light border" id="dropdown-basic">
                Account👤
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* Ajoutez les éléments de la liste déroulante ici */}
                <Dropdown.Item href="#Profile" as={Link} to="/profil" >
                  ⚙️ My Profile
                </Dropdown.Item>
                <Dropdown.Item href="#My_Items" as={Link} to="/My_Items"   >📦 My Items</Dropdown.Item>

                <Dropdown.Item href="#LogOut" onClick={logout}
                // logout
                >🚪 Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> 
            :
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
            }
        

        
         
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal"  onClick={handleOpenModal} >
              
            </button> */}

            {/* <MDBBtn onClick={handleOpenModal}>
              Account
            </MDBBtn> */}

            {/* {showModal && <ModalAccount closeModal={() => setShowModal(false)} />} */}
              
   
 
      </div>



    </header>
  );
};

export default Header;
