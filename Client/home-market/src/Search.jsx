import {React, useState} from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { callServer } from './util';
import {useForm} from './Hooks'
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


    const {handleInputChange,formData} = useForm();
    const [modalShow, setModalShow] = useState(false);

    // pour gerrer le modal account : 
    const handleCardClick = () => {
      //  logique pour gérer le clic ici...
      setModalShow(true)
    };

    // useEffect(() => {
    //   // This effect runs only once when the component mounts
    //   fetchDataFromServer();
    // }, []); // Empty dependency array
  
    // const fetchDataFromServer = async () => {
    //   try {
    //     const response = await callServer('http://127.0.0.1:3001/items/','post',{apiKey:loggedUser.apiKey});
    //     setData(response.data);
    //     console.log(response.data)
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    const handleSubmit = async (event) =>{

      const { value } = event.target;


      const item = await callServer(
        `http://127.0.0.1:3001/items/search`, 
        'get',
        {...formData, query:value}, 
      );

      if (!item.error){
          console.log(item.data);
      }else{
        console.log(item.error);
      }

    }



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
       


        <h4 className="mt-4 mb-5">
          <strong>All Furniture </strong>
        </h4>
  
  <MDBNavbar className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

        <div className="navbar-brand d-flex ml-5">
    
          <MDBInputGroup className='me-2'>
            <input className='form-control' name='search' placeholder="Type query 🔍" aria-label="Search" type='Search' />
          </MDBInputGroup>
          <MDBBtn outline onSubmit={handleSubmit}>Search</MDBBtn>

        </div>

        <ul className="navbar-nav  align-items-center">
        <li> Filters:</li>
          <li className="nav-item mx-3">
          <select onChange={handleInputChange} name='status' id="condition" className="form-select">
              <option value={undefined}>Select State Condition</option>
              <option>New</option>
              <option>Excellent / Like New</option>
              <option>Good</option>
              <option>Fair / Used</option>
              <option>Refurbished</option>
              <option>Needs Repair</option>
              <option>For Parts</option>
            </select>
          </li>

          <li className="nav-item mx-3">
          <select onChange={handleInputChange} name='category' id="category" className="form-select">
              <option value={undefined}>Select Category</option>
              <option>Sofa</option>
              <option>Bed</option>
              <option>Chair</option>
              <option>Table</option>
              <option>Desk</option>
              <option>TV Stand</option>
            </select>
          </li>

          <li className=" mr-5 ml-5 d-flex form-check form-check-lg">
           {/* <MDBCheckbox name='inlineCheck' id='inlineCheckbox1'
           className="form-check-lg"
            value='option1' label='Delivery Possible' inline /> */}
         
          <MDBContainer  >
              <div className="form-check form-switch ">
                  <input
                  className="form-check-input"
                  type="checkbox"
                  id="formSwitch"
                  defaultChecked
                  onChange={handleInputChange}
                  name='delivery'
                  />
                  <label className="form-check-label align-middle" htmlFor="formSwitch">
                  Delivery possible
                  </label>
              </div>
              </MDBContainer>
              </li>


        
          </ul>

      </div>

    </MDBNavbar>



      <br></br>

  {/* CATALOGUE  */}
        <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  mx-5 " >  
          <MDBCol xl={4}   className='mb-4'>
            <MDBCard     className='h-100' onClick={handleCardClick}
                 //  {/* ICI DEFINIR LAPPEL AU MODAL   */}
                 > 
                <MDBCardImage
                  src="https://th.bing.com/th/id/R.30a2d8ebdcf5bd4e09561543c4df302e?rik=HYbei9c65yZj7Q&riu=http%3a%2f%2fwww.khahomedesign.com%2fori-lit-double-en-bois-de-chene-massif-dunaj-1058.jpg&ehk=hLH3qp0tsxFTfxRlrT0EOrkpCUJlbIfzjNqfn6zDhW0%3d&risl=&pid=ImgRaw&r=0"
                  fluid
                  // className="w-25"  
                  position='top'   
                  className='img-fluid' style={{ objectFit: 'cover', height: '68%' }}

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
                  <h5 className="card-title mb-3">Our Bed Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Bed</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol  xl={4}  className='mb-4'>

            <MDBCard     className='h-100' onClick={handleCardClick}>
           
                <MDBCardImage
                  src="https://th.bing.com/th/id/R.d009712e46d74573e5a6d40b75818f56?rik=bSIY921YIo9mXQ&pid=ImgRaw&r=0"
                  fluid
                  // className="w-100"
                  position='top'
                  className='img-fluid' style={{ objectFit: 'cover', height: '68%' }}

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
                  <h5 className="card-title mb-3">Stand FOR tv Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>TV Stand</p>
                </a>
                <h6 className="mb-3">$399</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol  xl={4}   className='mb-4'>
            <MDBCard className='h-100' onClick={handleCardClick}>
            
                <MDBCardImage
                  src="https://th.bing.com/th/id/OIP.WVN9I8vMi79iELJAnl705AHaEK?w=292&h=129&c=7&r=0&o=5&pid=1.7"
                  fluid
                  // className="w-100"
                  position='top'  
                  className='img-fluid' style={{ objectFit: 'cover', height: '68%' }}
 

                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
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
                  <h5 className="card-title mb-3">Desk 199  name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Chair</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>


            


              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol  xl={4}  className='mb-4'>
            <MDBCard className='h-100' onClick={handleCardClick}>
              
                <MDBCardImage
                  src="https://th.bing.com/th/id/OIP.y710FCWjEhgUlGsHOS87TAHaE6?w=282&h=187&c=7&r=0&o=5&pid=1.7"
                  fluid
                  className='img-fluid' style={{ objectFit: 'cover', height: '68%' }}
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
            <MDBCard className='h-100' onClick={handleCardClick}>
           
                <MDBCardImage
                  src="data:image/jpeg;base64,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"
                  fluid
                  className='img-fluid' style={{ objectFit: 'cover', height: '68%' }}
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100"></div>
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
                  <p>Sofa</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol  xl={4}   className='mb-4'>
            <MDBCard className='h-100' onClick={handleCardClick}>
         
                <MDBCardImage
                  src="https://th.bing.com/th?id=OIP.65_ZS5TmzNmR05f_vQTlzgHaFd&w=291&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                  fluid
                  className='img-fluid' style={{ objectFit: 'cover', height: '68%' }}
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
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
                  <p>Sofa</p>
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