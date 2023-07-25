import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Shared Components/style.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer className=" ">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column">

            <div className="text-center">
              <img src="https://img.freepik.com/premium-vector/chair-house-interior-vector-logo-design-minimalist_569344-500.jpg?w=740"
                style={{width: '185px'}} alt="logo" />
            </div>

            <p>Please Register with this forms to join us with your account :</p>
     


            <div className="container ">


                <form>
                <MDBRow className='mb-4'>
                    <MDBCol>
                    <MDBInput id='form6Example1' label='First name' />
                    </MDBCol>
                    <MDBCol>
                    <MDBInput id='form6Example2' label='Last name' />
                    </MDBCol>
                </MDBRow>
            
                <MDBRow className='mb-4'>
                    <MDBCol>
                    <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
                    </MDBCol>
                    <MDBCol>
                    <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />
                    </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />

                
                <MDBCol size="auto">
                <span id='textExample2' className='form-text'>
                    Must be 8-20 characters long.
                </span>
                </MDBCol>
                <MDBInput
                wrapperClass='col-auto'
                label='Password'
                type='password'
                id='formTextExample2'
                aria-describedby='textExample2'
                />
               

                <MDBInput
                wrapperClass='col-auto'
                label='Repeat Password'
                type='password'
                id='formTextExample2'
                aria-describedby='textExample2'
                />

                </form>

            </div>

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn ripple={false} className="mb-4 w-100 gradient-custom-2">Sign Up</MDBBtn>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">You already have an account?</p>
              <MDBBtn outline className='mx-2' ripple={false} color='danger'>
                Login
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4  mx-md-4">
            <h4 className="mt-1 mb-5 pb-1">WELCOME to The Home Market Team</h4>
                <br></br>   <br></br>  <br></br> 

              <h4 class="mb-1">We are more than just a company</h4>
              <p class="small mb-5">Welcome to our furniture emporium, where impeccable craftsmanship 
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

export default Register;


 
    
    