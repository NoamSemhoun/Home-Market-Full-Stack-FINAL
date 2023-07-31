import React from "react";

import {
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage
  
  } from "mdb-react-ui-kit";



function ItemCard(params){

    const {itemData} = params;

    return (
        <MDBCol  xl={4}  className='mb-4'>
            <MDBCard>
           
                <MDBCardImage
                  src={itemData.mainImage}
                  fluid
                  className="w-100"
                />
                <a href="#!" >
                 

                  {itemData.delivery &&
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-2">Delivery Possible</span>
                      </h5>
                    </div>
                  </div>}

                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
          
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">{itemData.title}</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>{itemData.status}</p>
                </a>
                <h6 className="mb-3">{itemData.price}</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
    )
}


export default ItemCard;