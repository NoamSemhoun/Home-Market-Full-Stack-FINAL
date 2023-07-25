import React from 'react';
import Form from 'react-bootstrap/Form';

import {
    MDBRow,
    MDBAccordion, MDBAccordionItem, MDBIcon,
    MDBCol,
    MDBInput,
    MDBInputGroup,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Selling() {
    return (
        <div className="container">

            <div class="container d-flex justify-content-center align-items-center vh-10 mt-5">
                 <h1 class="text-center display-4  mb-4">Selling Your furniture</h1>
                

                 
            </div>       
                      <h2 class="text-center display-7"> Post your listing with this Forms in 3 Steps </h2>


            <div className="justify-content-center mt-5" style={{ minWidth: '30%'}}>
            {/* d-flex   les propriétés de flexibilité   OU ::   , maxWidth: '80%' */}

                    <MDBAccordion initialActive={1}>
                    <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; #1 Details aticle </>}>
                       
                    <form>
                        <MDBRow className='mb-4'>

                            <MDBCol size="4" >
                            <MDBInput size="lg" 
                             defaultValue ='Table IKEA name '          

                            //  style= 'color = gray'
                              id='form6Example1' label='Tittle' />
                            </MDBCol>

                    

                            <MDBCol size="4" >
                            <Form.Select label='Category ' size="lg"  >
                                  <option>Select Category </option> 
                                  {/* mettre par default  */}
                                <option>Sofa </option>
                                <option>Bed </option>
                                <option>Table </option>

                            </Form.Select>
                            <br />
                            </MDBCol>
                            

                            <MDBCol size="4">
                                <MDBInputGroup size="lg"   textAfter={['.00','$' ]}>
                                    <input className='form-control' type='number' />
                                </MDBInputGroup>
                                Price
                            </MDBCol>
                            
                        </MDBRow>


                        <MDBRow className='mb-4'>

                            <MDBCol size="4" >
                            <MDBInput size="lg" 
                            defaultValue='IKEA ' 
                            //  style= 'color = gray'
                            id='form6Example1' label='Brand Name' />
                            </MDBCol>



                            <MDBCol size="4" >
                            <Form.Select label='Category ' size="lg"  >
                                <option>Select State Condition </option> 
                                {/* mettre par default  */}
                                <option>New </option>
                                <option>Excellent / Like New  </option>
                                <option>Good </option>
                                <option>Fair / Used  </option> 
                                <option>Refurbished  </option>
                                <option>Needs Repair </option>
                                <option>For Parts </option>


                            </Form.Select>
                            <br />
                            </MDBCol>

                            <MDBCol size="4" >

                                <MDBCheckbox
                                wrapperClass='d-flex justify-content-center mb-4'
                                id='form6Example8'
                                label=' Negociable '
                                defaultChecked
                               />

                                <MDBCheckbox
                                    wrapperClass='d-flex justify-content-center mb-4'
                                    id='form6Example8'
                                    label=' Delivery possible '
                                    defaultChecked
                                /> 
                          
                            </MDBCol>

                            </MDBRow>


                        <MDBInput wrapperClass='mb-4' id='form6Example3' label='URL Brand ' />

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description area</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>                        
                        

 
                        

                    </form>

                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; #2 Photos article </>}>
                        
                        Including photos in a furniture listing is essential for attracting potential buyers, 
                        building trust, and providing visual information. 
                        It enhances the listing's appeal and helps buyers make informed decisions.
                        <MDBInputGroup
                            className='mb-3 mt-5'
                            textBefore='Upload the main photo :'
                            textTag='label'
                            textProps={{ htmlFor: 'inputGroupFile01' }}
                        >
                             
                        <input className='form-control' type='file' id='inputGroupFile01' />
                               
                         <br></br>

                           
                            
                        </MDBInputGroup>
                    
                        <Form.Group controlId="formImages">
                            <Form.Label>Upload other Images</Form.Label>
                            <Form.Control type="file" multiple  />
                        </Form.Group>

                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; #3  Personnal Information </>}>
                        
                    <form>
                        <MDBRow className='mb-4'>
                            <MDBCol>
                            <MDBInput id='form6Example1' label='First name' />
                            </MDBCol>
                            <MDBCol>
                            <MDBInput id='form6Example2' label='Last name' />
                            </MDBCol>
                        </MDBRow>

                        <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
                        <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
                        <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

                        <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />

                        <MDBCheckbox
                            wrapperClass='d-flex justify-content-center mb-4'
                            id='form6Example8'
                            label='Create an account?'
                            defaultChecked
                        />

                        <MDBBtn className='mb-4' type='submit' block>
                            Submit Item
                        </MDBBtn>
                    </form>


                    </MDBAccordionItem>
                 </MDBAccordion>

         </div>
        </div>

    );
}

export default Selling;