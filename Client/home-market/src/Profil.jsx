import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
 import { postData } from './util';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Shared Components/style.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}from 'mdb-react-ui-kit';



function Profil() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');

  const [showModal, setShowModal] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();


    // Bdikot in server + on jsx

    // send to server : 

      const user = postData("http://127.0.0.1:3001/users/signup", 
      {
        fname : firstName,
        lname: lastName,
        email: email,
        phone: phone,
        address: address,
        // city
        password: password,
        'repeat-password' : repeatpassword 
        }, "user")

          console.log(user);

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <MDBContainer className=" ">

      <MDBRow>

      <MDBCol col='6' className="mb-5">
      <div className="d-flex flex-column justify-content-center   bg-primary h-100 mb-4">

            <div className="text-white px-3 py-4  mx-md-4">

            <div className="text-center">
              <img src="https://img.freepik.com/premium-vector/chair-house-interior-vector-logo-design-minimalist_569344-500.jpg?w=740"
                style={{width: '185px'}} alt="logo" />
            </div>
                 <br></br>   <br></br>  <br></br> 

              <h4 class="mb-1">We are more than just a company...</h4>
              <br></br>
              <br></br>

              <p class="small mb-5">Welcome to our furniture emporium, where impeccable craftsmanship 
              meets timeless elegance. Explore our curated collection of handpicked furnishings to create 
              stunning interiors that reflect your unique taste and personality. 
              Redefine your home with pieces that inspire beauty and harmony
              </p>
            </div>

          </div>

        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column">

          <br></br>
              {/* <h1 className="display-4 text-primary font-weight-bold"></h1> */}
              <div className="container d-flex flex-column align-items-center justify-content-center ">
                    <h4 className="mt-1  pb-1">Your Profil</h4>
              </div>

           
            <p>Please Eddit Your Profile with this forms to your account :</p>
     

            <div className="container ">


                <form onSubmit={handleSubmit}>
                <MDBRow className='mb-4'>
                    <MDBCol>
                    <MDBInput id='form6Example1'   onChange={(e) => setFirstName(e.target.value)}  label='First name' required />
                    </MDBCol>
                    <MDBCol>
                    <MDBInput id='form6Example2' onChange={(e) => setLastName(e.target.value)}  label='Last name' required  />
                    </MDBCol>
                </MDBRow>
            
                <MDBRow  >
                    <MDBCol>
                    <MDBInput wrapperClass='mb-4' onChange={(e) => setEmail(e.target.value)} type='email' id='form6Example5' label='Email' 
                    //  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                     required />
                    </MDBCol>
                    <MDBCol>
                    <MDBInput wrapperClass='mb-4' onChange={(e) => setPhone(e.target.value)}  type='tel' id='form6Example6' label='Phone' 
                      pattern="[0-9]{10,15}"
                      
                      required />
                    </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' onChange={(e) => setAddress(e.target.value)} value={address} id='form6Example4' label='Address' required/>

                
                <MDBCol size="auto">
                <span id='textExample2' className='form-text'>
                       &nbsp;&nbsp;  Must be 6-20 characters long.
                </span>
                </MDBCol>
                <MDBInput
                wrapperClass='col-auto'
                onChange={(e) => setPassword(e.target.value)}
                label='Password'
                type='password'
                id='formTextExample2'
                aria-describedby='textExample2'
                required 
                minLength={6}
                maxLength={20}
                />
               

                <MDBInput
                wrapperClass='col-auto'
                label='Repeat Password'
                onChange={(e) => setRepeatPassword(e.target.value)}

                type='password'
                id='formTextExample2'
                aria-describedby='textExample2'
                required 
                minLength={6}
                maxLength={20}
                />



                  <div className="text-center pt-1 mb-5 pb-1">
                    <MDBBtn type="submit"  className="mb-4 w-100 ">Save Changes</MDBBtn>
                  </div>


                    {/* UNE FOIS CONNECTE  */}
                    <Modal show={showModal} onHide={handleCloseModal} centered>
                      <Modal.Header closeButton   className="bg-success text-white">
                        <Modal.Title>YOUR PROFILE </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>Your modifications have been successfully registered. </p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    
                </form>

            </div>

        
           

          </div>

        </MDBCol>



      </MDBRow>

    </MDBContainer>
  );
}

export default Profil;


 
    // **************   validation form :       ******************
    // required = champ obligatoire
    // pattern = valeur doit coorespondre  motif est [0-9]{10}    ou      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

    // maxlength minlength = pr MDP   minLength={6}   maxLength={20}

    // Vous devez également effectuer des validations côté serveur pour garantir l'intégrité des données avant de les enregistrer dans votre base de données.