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
          src='https://www.pricefactory.fr/5263/meuble-pas-cher-ensemble-design-pour-chambre-a-coucher-fulmo-lit-160x200-cm-avec-sommier-tables-de-chevet-commode.jpg'
          alt='...'
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}

        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://i.pinimg.com/originals/e3/1e/ea/e31eead3d51e066bb336b2f69e36b4b9.jpg'
          alt='...'
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}

        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://i.pinimg.com/originals/f9/f7/f7/f9f7f78e226576053fc3f9faa2f0196e.jpg'

          alt='...'
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}

        >
          <h5>d slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>


        
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://th.bing.com/th/id/R.dfb00d33b258c9042f002551fb662c83?rik=u6jf2QSV%2bjzM1Q&pid=ImgRaw&r=0'
          alt='...'
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}

        >
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://i.pinimg.com/originals/f7/80/1f/f7801fcedcb649386df984d51c7e72ba.jpg'
          alt='...'
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}

        >
          <h5>4 slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://i.pinimg.com/originals/f9/f7/f7/f9f7f78e226576053fc3f9faa2f0196e.jpg'
          alt='...'
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}

        >
          <h5>5 slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://th.bing.com/th/id/R.9eed56e8d244f846b51fccc965512ca6?rik=%2bRTcmpz6f3O5dQ&riu=http%3a%2f%2flabs2.kentooz.com%2fkodok%2fwp-content%2fuploads%2f2013%2f04%2fbedroom-design-190.jpg&ehk=51SVy35yBaD3lJPi22DhM1Dj%2fmtBTTg2wco2QOPx58I%3d&risl=&pid=ImgRaw&r=0'
          alt='...'
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}

        >
          <h5>6 slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselItem>

        
      </MDBCarousel>
    </div>
    
    
    

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
            <h5 className="text-warning fw-bold mb-3">28</h5>
            <h6 className="fw-normal mb-0">Users</h6>
          </div>
        </div>
      </section></>

 




  );
};

export default Home;