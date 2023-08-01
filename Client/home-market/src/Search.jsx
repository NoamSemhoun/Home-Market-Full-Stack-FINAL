import {React, useState, useEffect} from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { callServer } from './util';
import {useForm} from './Hooks';
import ItemCard from './itemCard';
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
    MDBCheckbox,
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


    const {handleInputChange,formData} = useForm();
    const [modalShow, setModalShow] = useState(false);
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);


    // pour gerrer le modal account : 
    const handleCardClick = () => {
      //  logique pour gérer le clic ici...
      setModalShow(true)
    };

    useEffect(() => {
      // This effect runs only once when the component mounts
      fetchDataFromServer();
    }, []); // Empty dependency array
  
    const fetchDataFromServer = async () => {
      try {
        const response = await callServer(`http://127.0.0.1:3001/items/show?page=${page}`,'get',{});
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

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
        <a > Filters:</a>
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
      {data && data.map((item => <ItemCard itemData={item}></ItemCard>))}

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
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
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
                  <p>Category</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol  xl={4}   className='mb-4'>
            <MDBCard className='h-100' onClick={handleCardClick}>
         
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
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