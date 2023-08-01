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
              style={{ backgroundColor: '#3b5998' }}
              href='#!'
              role='button'
            >
              <img src='https://www.bing.com/images/search?view=detailV2&ccid=hGaetDAQ&id=DD699378F075B807EE092502174EC2CD724E4116&thid=OIP.hGaetDAQWapgIJbIOhPhXwHaHa&mediaurl=https%3a%2f%2f1.bp.blogspot.com%2f-S8HTBQqmfcs%2fXN0ACIRD9PI%2fAAAAAAAAAlo%2fFLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw%2fs1600%2ff_logo_RGB-Blue_1024.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.84669eb4301059aa602096c83a13e15f%3frik%3dFkFOcs3CThcCJQ%26pid%3dImgRaw%26r%3d0&exph=1600&expw=1600&q=icon+facebook&simid=607990361195368615&FORM=IRPRST&ck=35408430E05F9A5CCF02616307102D6D&selectedIndex=0'  />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#55acee' }}
              href='#!'
              role='button'
            >
               {/* <img src='https://th.bing.com/th/id/R.1fcdfa46f0d86204197199f44c2f2a04?rik=FP5HsWTgkt%2bGuQ&pid=ImgRaw&r=0' */}
                {/* alt='Twitter Icon' /> */}
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#dd4b39' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='google' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#ac2bac' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='github' />
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