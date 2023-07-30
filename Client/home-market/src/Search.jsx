import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

// const Search = () => {
  import {
    MDBContainer,
    MDBRow, 
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBNavbar,
    MDBInputGroup,
    MDBCarousel,
    MDBCarouselItem,
    // MDBIcon,
    MDBBtn
  } from "mdb-react-ui-kit";

   




  // FONCTION DU MDAL 
  function MyModal(props) {

    //  fonction pr renvoyer vers whatsapp
      const WhatsappURL = 'https://wa.link/bmt684'; // Remplacez cette URL par l'URL externe que vous souhaitez ouvrir
 
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal Items TITLE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>3 PHOTOS</h5>
           <div  >
           <Carousel>


           {/* <Carousel>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`MyImage ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <p>Description : {product.description}</p>
          <p>Prix : {product.price}€</p>
          Ajoutez plus de détails sur le produit ici */}


              <Carousel.Item >
                <img  src='https://i.pinimg.com/originals/f9/f7/f7/f9f7f78e226576053fc3f9faa2f0196e.jpg'
                  className="d-block w-100"    alt="MyImage 1"

                />
              </Carousel.Item>
              <Carousel.Item >
                <img src='https://i.pinimg.com/originals/e3/1e/ea/e31eead3d51e066bb336b2f69e36b4b9.jpg'
                  className="d-block w-100"     alt="MyImage2 1"
                />
              </Carousel.Item>


          </Carousel>
              <div className="text-center mt-4"> {/* Utiliser la classe "text-center" pour centrer le texte */}
                <h5>Good condition</h5>

                
                <p>Description : Super produit à vendre</p>
                <p>Price : 100 €</p>
                <p>Location : Jerusalem, Givat Mordehay</p>
                <p>Brand : KETER</p>
                <a href="https://il.keter.com/items/5881623-%D7%A1%D7%98-%D7%A9%D7%95%D7%9C%D7%97%D7%9F-%D7%A4%D7%95%D7%98%D7%95%D7%A8%D7%94-4-%D7%9B%D7%A1%D7%90%D7%95%D7%AA-%D7%90%D7%99%D7%91%D7%99%D7%96%D7%94-%D7%90%D7%A4%D7%95%D7%A8"
                   target="_blank" rel="noopener noreferrer">
                  <Button className="btn btn-success rounded-lg shadow" >Visit Origin Brand Website (Extern URL) </Button>  
                </a>

                {/* Ajoutez plus de détails sur le produit ici */}
              </div>

          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <a href={WhatsappURL} target="_blank" rel="noopener noreferrer">
             <Button >Contact seller</Button>  
          </a>


        </Modal.Footer>
      </Modal>
    );
  }



  function Search() {


    // pour gerrer le modal account : 
    const handleCardClick = () => {
      //  logique pour gérer le clic ici...
      setModalShow(true)
    };
    const [modalShow, setModalShow] = React.useState(false);


    return (



// SOCLE COMMUN : 

    //   <MDBContainer fluid className="my-5 text-center">
    
    //   <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    //     {products.map((product, index) => (
    //       <MDBCol xl={4} className="mb-4" key={index}>
    //         {/* Utilisez le composant Card pour chaque produit */}
    //         <Card      // onClick={handleCardClick}
    //           imageUrl={product.imageUrl}
    //           isNew={product.isNew}
    //           productName={product.productName}
    //           category={product.category}
    //           price={product.price}
    //         />
    //       </MDBCol>
    //     ))}
    //   </MDBRow>
    // </MDBContainer>







      <MDBContainer fluid className="my-5 text-center mx-auto  ">


        <MyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
       


        <h4 className="mt-4 ">
          <strong>All Furniture </strong>
        </h4>
  
  <MDBNavbar className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

      {/* Logo de l'application */}
        <a className="navbar-brand" href="/"> Filter :</a>

        <ul className="navbar-nav">
    
          <li className="nav-item mx-3">
          <select id="category" className="form-select form-select-lg">
              <option>Select State Condition</option>
              <option>New</option>
              <option>Excellent / Like New</option>
              <option>Good</option>
              <option>Fair / Used</option>
              <option>Refurbished</option>
              <option>Needs Repair</option>
              <option>For Parts</option>
            </select>
          </li>

          <li className="d-flex">
            
          <MDBInputGroup className='me-2'>
            <input className='form-control' placeholder="Type query 🔍" aria-label="Search" type='Search' />
          </MDBInputGroup>
          <MDBBtn outline>Search</MDBBtn>
        
          </li>
          </ul>

      </div>

    </MDBNavbar>



      <br></br>

  {/* CATALOGUE  */}
        <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  mx-5 " >  
          <MDBCol xl={4}   className='mb-4'>
            <MDBCard   onClick={handleCardClick}
                 //  {/* ICI DEFINIR LAPPEL AU MODAL   */}
                 > 
                <MDBCardImage
                  src="https://th.bing.com/th/id/R.30a2d8ebdcf5bd4e09561543c4df302e?rik=HYbei9c65yZj7Q&riu=http%3a%2f%2fwww.khahomedesign.com%2fori-lit-double-en-bois-de-chene-massif-dunaj-1058.jpg&ehk=hLH3qp0tsxFTfxRlrT0EOrkpCUJlbIfzjNqfn6zDhW0%3d&risl=&pid=ImgRaw&r=0"
                  fluid
                  className="w-100"     
               

                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">New</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
            
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol  xl={4}  className='mb-4'>
            <MDBCard>
           
                <MDBCardImage
                  src="https://th.bing.com/th/id/R.d009712e46d74573e5a6d40b75818f56?rik=bSIY921YIo9mXQ&pid=ImgRaw&r=0"
                  fluid
                  className="w-100"
                />
                <a href="#!"  >
                 

                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-2">Delivery Possible</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
          
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Jerusalem</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol  xl={4}   className='mb-4'>
            <MDBCard>
            
                <MDBCardImage
                  src="https://th.bing.com/th/id/OIP.WVN9I8vMi79iELJAnl705AHaEK?w=292&h=129&c=7&r=0&o=5&pid=1.7"
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div class="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol  xl={4}  className='mb-4'>
            <MDBCard>
              
                <MDBCardImage
                  src="https://th.bing.com/th/id/OIP.y710FCWjEhgUlGsHOS87TAHaE6?w=282&h=187&c=7&r=0&o=5&pid=1.7"
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-2">Eco</span>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
            
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol  xl={4}  className='mb-4'>
            <MDBCard>
           
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100"></div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol  xl={4}   className='mb-4'>
            <MDBCard>
         
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">New</span>
                        <span className="badge bg-success ms-2">Eco</span>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
            
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>



      </MDBContainer>
    );
  }
  

export default Search;