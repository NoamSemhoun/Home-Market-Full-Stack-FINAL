import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Home = () => {
  return (
    <><div>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
          alt='...'
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}

        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
          alt='...'
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}

        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
          alt='...'
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}

        >
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
    
    
    

      {/* CHIFFRE ET SATS  en bas  */}
    
    
    <div className="vr vr-blurry" style={{ height: '250px' }}></div><section class="text-center">
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
            <h5 className="text-warning fw-bold mb-3">28</h5>
            <h6 className="fw-normal mb-0">Users</h6>
          </div>
        </div>
      </section></>

 




  );
};

export default Home;