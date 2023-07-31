import React from 'react';


import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button,Carousel  } from 'react-bootstrap';

import './Shared Components/style.css';

const Home = () => {
  return (
    <><div>
       <Carousel  showControls fade>


        <Carousel.Item    >
        <img           style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          className="d-block w-100"
          src='https://www.pricefactory.fr/5263/meuble-pas-cher-ensemble-design-pour-chambre-a-coucher-fulmo-lit-160x200-cm-avec-sommier-tables-de-chevet-commode.jpg'
          alt="First slide"
        />
          <Carousel.Caption>

              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to="/search">
                  <Button className="border text-dark bg-white" variant="dark">SHOP NOW</Button>
              </Link>

          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item  >
            <img           style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          className="d-block w-100"
          src='https://i.pinimg.com/originals/e3/1e/ea/e31eead3d51e066bb336b2f69e36b4b9.jpg'
          alt="First slide"
        />
         <Carousel.Caption>

            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/search">
                <Button className="border text-dark bg-white" variant="dark">SHOP NOW</Button>
            </Link>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item        >
             <img          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          className="d-block w-100"
          src='https://i.pinimg.com/originals/e3/1e/ea/e31eead3d51e066bb336b2f69e36b4b9.jpg'
          alt="First slide"
        />
          <Carousel.Caption>

            <h5>d slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/search">
                <Button className="border text-dark bg-white" variant="dark">SHOP NOW</Button>
            </Link>
          </Carousel.Caption>

        </Carousel.Item>
    
         <Carousel.Item>
              <img style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
            className="d-block"
            src='https://th.bing.com/th/id/R.dfb00d33b258c9042f002551fb662c83?rik=u6jf2QSV%2bjzM1Q&pid=ImgRaw&r=0'
            alt="333 slide"/>

          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Link to="/search">
                <Button className="border text-dark bg-white" variant="dark">SHOP NOW</Button>
            </Link>
          </Carousel.Caption>

        </Carousel.Item> 

        <Carousel.Item >

          <img   style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          className="d-block w-100"
          src='https://i.pinimg.com/originals/f7/80/1f/f7801fcedcb649386df984d51c7e72ba.jpg'
          alt="First slide"
        />
          <Carousel.Caption>
            <h5>4 slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Link to="/search">
                <Button className="border text-dark bg-white" variant="dark">SHOP NOW</Button>
            </Link>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item   >
           <img           style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          className="d-block w-100"
          src='https://i.pinimg.com/originals/f9/f7/f7/f9f7f78e226576053fc3f9faa2f0196e.jpg'
          alt="First slide"
        />
          <Carousel.Caption>
            <h5>5 slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Link to="/search">
                <Button className="border text-dark bg-white" variant="dark">SHOP NOW</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
           <img           style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          className="d-block w-100"
          src='https://th.bing.com/th/id/R.9eed56e8d244f846b51fccc965512ca6?rik=%2bRTcmpz6f3O5dQ&riu=http%3a%2f%2flabs2.kentooz.com%2fkodok%2fwp-content%2fuploads%2f2013%2f04%2fbedroom-design-190.jpg&ehk=51SVy35yBaD3lJPi22DhM1Dj%2fmtBTTg2wco2QOPx58I%3d&risl=&pid=ImgRaw&r=0'
          alt="First slide"
        />
          <Carousel.Caption>
            <h5>6 slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Link to="/search">
                <Button className="border text-dark bg-white" variant="dark">SHOP NOW</Button>
            </Link>
          </Carousel.Caption>

        </Carousel.Item> 

        
      </Carousel> 
    </div>
    

        <div className="d-flex justify-content-center align-items-center ">
          <div className="text-center">
            <h1 className="custom-title">"Selling Furniture, <br>
            </br>Simplified and Smart"</h1>
          </div>
        </div>


      <Container fluid>
        <Row>
           

          <Col xs={12} md={6} >
            <div className="d-flex flex-column align-items-center">
              <br></br><br></br>
              <div class="p-3 mb-2 bg-warning  text-white">        
              <h2 className=" TitleAbout display-4 mt-5"  >About Us</h2>
              </div>

              {/* <Row className="mt-4">
                <Col xs={6}>
                  <Image src="https://example.com/photo1.jpg" fluid />
                </Col>
                <Col xs={6}>
                  <Image src="https://example.com/photo2.jpg" fluid />
                </Col>
              </Row> */}
            </div>
          </Col>

          <Col xs={12} md={6} className="pr-5 text-center">
          <div className="OKAbout text-left">
              <p>
                Welcome to Furniture Marketplace, the premier online platform that empowers individuals to buy and sell furniture effortlessly.
                Our platform serves as a bridge between sellers and buyers, allowing users to find the perfect piece for their home or effortlessly sell their pre-loved furniture.
                With an intuitive user interface and advanced search functionalities, Furniture Marketplace redefines the way furniture transactions are made.
              </p>
              <p>
                Furniture Marketplace was founded in 2010 by a team of passionate individuals who saw the need for a convenient and efficient way for people to buy and sell furniture.
                Our journey started as a small local venture, connecting neighbors who wished to exchange furniture items.
                Over the years, we expanded our reach and evolved into a nationwide platform, revolutionizing the furniture marketplace landscape.
              </p>
              <p>
                Our mission is to provide a seamless and enjoyable experience for individuals seeking to buy or sell furniture.
                We strive to be the go-to platform for anyone looking to furnish their space sustainably or find a new home for their beloved furniture.
              </p>
            </div>
          </Col> 
        </Row>
      </Container>
    
    
        <br></br><br></br><br></br>


  

        <Container fluid className='mb-5 d-flex justify-content-center align-items-center'  >
      
            <div className="OKAbout text-left">
            <h1 className='TitleAbout text-center'>Sell in 3 steps :    </h1>
              <p className='mb-1'>
                ✅Fill in the Furniture Details - Provide all the necessary information.
                </p>
                <p className='mb-1'>
                ✅Upload the most beautiful pictures of your furniture.
                </p>
                      <p className='mb-1'>
                ✅Confirm Your Contact Information  for potential buyers to reach you.
              </p>
              <br />
           
            </div>
            <div>
                  <Link to="/selling">
                    <Button className="border" variant="outline-dark">Go to Selling Page</Button>
                  </Link>
                </div>
      </Container>
      <br />
      <br />
      <br />


      <Container fluid className='mb-5 d-flex justify-content-center align-items-center'  >
              <div >
                <iframe                   className='shadow-1-strong rounded'
                width="640" height="360" 
                // RESPONSIVE
                
                src="https://www.youtube.com/embed/rgeS-MkZPVo" 
                title="How to Make Money Flipping Furniture For Beginners | Easy Furniture Makeover" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>

                </iframe>
              </div>
    </Container>

    <Container fluid className='mb-5 d-flex justify-content-center align-items-center'  >
        /CATEGORY
    </Container>

    

      {/* CHIFFRE ET SATS  en bas  */}
    
    
    <div className="vr vr-blurry" style={{ height: '250px' }}></div><section className="text-center">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                        {/* icone */}
            <i className="fas fa-cubes fa-3x text-primary mb-4"></i>
            <h5 className="text-secondary fw-bold mb-3">5000+</h5>
            <h6 className="fw-warning mb-0">Components</h6>
            {/* ligne vertical */}
            <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
            <i className="fas fa-layer-group fa-3x text-primary mb-4"></i>
            <h5 className="text-success fw-bold mb-3">490+</h5>
            <h6 className="fw-warning mb-0">Design Furniture</h6>
            <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
            <i className="fas fa-image fa-3x text-primary mb-4"></i>
            <h5 className="text-muted fw-bold mb-3">100+</h5>
            <h6 className="fw-warning mb-0">Sells</h6>
            <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
            <i className="fas fa-plug fa-3x text-primary mb-4"></i>
            <h5 className="text-muted fw-bold mb-3">28</h5>
            <h6 className="fw-normal mb-0">Users</h6>
          </div>
        </div>
      </section></>

 




  );
};

export default Home;