import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Shared Components/style.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className="">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://img.freepik.com/premium-vector/chair-house-interior-vector-logo-design-minimalist_569344-500.jpg?w=740"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Home Market Team</h4>
            </div>

            <p>Please login to your account :</p>
            


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn ripple={false} className="mb-4 w-100 gradient-custom-2">Sign UP</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              


              <Link to="/Register">           
                <MDBBtn outline className='mx-2' ripple={false} color='danger'>
                  Sign IN
                </MDBBtn>
              </Link>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Welcome to our furniture emporium, where impeccable craftsmanship 
              meets timeless elegance. Explore our curated collection of handpicked furnishings to create 
              stunning interiors that reflect your unique taste and personality. 
              Redefine your home with pieces that inspire beauty and harmony
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;