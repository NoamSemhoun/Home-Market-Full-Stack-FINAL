import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal, MDBModalHeader,
  MDBModalDialog,
  MDBModalContent,
   MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from 'mdb-react-ui-kit';

const ModalAccount = ({ closeModal }) => {

  

  return (
    <>
      {/* <MDBBtn onClick={toggleShow}>Small modal</MDBBtn> */}
      {/* <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}> */}


        <MDBModalDialog size='xl'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>VERY LARGE modal</MDBModalTitle>

              <MDBBtn color='none' onClick={closeModal}>
                <span aria-hidden='true'>&times;</span>
               </MDBBtn>
            
            
             </MDBModalHeader>


            <MDBModalBody>...TEST
            <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus <br></br>
            laboriosam. Quibusdam facilis doloribus <br></br>debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt <br></br>dolore amet atque facilis ipsum
            deleniti rem!
          </p>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={closeModal}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>

          </MDBModalContent>
        </MDBModalDialog>


      {/* </MDBModal> */}
    </>
  );
}


 export default ModalAccount;
