import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='mt-5 bg-light mb-5 text-center  text-dark'>

        <section className=' justify-content-center justify-content-lg-between   border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <MDBContainer className='p-4 pb-0'>
          <section >
            <MDBBtn
               
              className='m-1'
              style={{ backgroundColor: 'white' , border: '1px solid white'  }}
              href='#!'
              role='button'
            >
              <img src='https://www.bing.com/th?id=OIP.VOh1yQddzH7J8M1_oPqPeAHaHt&w=197&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' style={{width: '35px'}}  />
            </MDBBtn>

            <MDBBtn
               
               className='m-1'
               style={{ backgroundColor: 'white' , border: '1px solid white'  }}
               href='#!'
               role='button'
             >
               <img alt="ok" src='https://th.bing.com/th/id/R.1fcdfa46f0d86204197199f44c2f2a04?rik=FP5HsWTgkt%2bGuQ&pid=ImgRaw&r=0' style={{width: '35px'}}  />
             </MDBBtn>

             <MDBBtn
               
               className='m-1'
               style={{ backgroundColor: 'white' , border: '1px solid white'  }}
               href='#!'
               role='button'
             >
               <img alt="ok" src='https://www.bing.com/th?id=OIP.bhVPgAcuDxNBBew1WZ10pgHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' style={{width: '35px'}}  />
             </MDBBtn>
           
             <MDBBtn
               
               className='m-1'
               style={{ backgroundColor: 'white' , border: '1px solid white'  }}
               href='#!'
               role='button'
             >
               <img alt="ok" src='data:image/jpeg;base64,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' style={{width: '35px'}}  />
             </MDBBtn>

          </section>
        </MDBContainer>
      </section>


      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
               Our Company 
              </h6>
              <p>
              Furniture Marketplace, the premier online platform that empowers individuals to buy and sell furniture effortlessly. 
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products Category</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Bed
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  For room
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sofa
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='Register' className='text-reset'>
                  Sign Up
                </a>
              </p>
              <p>
                <a href='profil' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='Search' className='text-reset'>
                  All furnitures
                </a>
              </p>
              <p>
                <a href='' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                 Jerusalem, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@homemarket.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +972 52 455 364
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>




      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright  :
        <a className='text-white' href='https://mdbootstrap.com/'>
           NoamMD
        </a>
      </div>
    </MDBFooter>
  );
}