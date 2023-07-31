import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// const Search = () => {
  import {
    MDBContainer,
    MDBRow, 
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage
  
  } from "mdb-react-ui-kit";



  function MyItemsNoam() {

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


        <h4 className="mt-4 mb-5">
          <strong>All My items Furniture </strong>
        </h4>
  

        {/* CATALOGUE  */}
        <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  mx-5 " >  
          <MDBCol xl={4}   className='mb-4'>
            <MDBCard   
            // onClick={handleCardClick}
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
            <MDBCard>
         
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
                  fluid
                  className="w-100"
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
  

export default MyItemsNoam;