import React from 'react';

import {
    MDBRow,
    MDBAccordion, MDBAccordionItem, MDBIcon,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Selling() {
    return (
        <div className="container">

            <div class="container d-flex justify-content-center align-items-center vh-10 mt-5">
                 <h1 class="text-center display-4  mb-4">Selling Your furniture</h1>
                

                 
            </div>       
                      <h2 class="text-center display-7"> This Forms in 3 Steps </h2>


            <div className="justify-content-center mt-5" style={{ minWidth: '30%'}}>
            {/* d-flex   les propriétés de flexibilité   OU ::   , maxWidth: '80%' */}

                    <MDBAccordion initialActive={1}>
                    <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; #1 Details aticle </>}>
                       
                    <form>
                        <MDBRow className='mb-4'>
                            <MDBCol>
                            <MDBInput id='form6Example1' label='Name' />
                            </MDBCol>
                            <MDBCol>
                            <MDBInput id='form6Example2' label='Brand name' />
                            </MDBCol>
                            
                        </MDBRow>

                        <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
                        <MDBInput wrapperClass='mb-4' id='form6Example4' label='Description' />
                        <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Price' />

                        <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />

                        <MDBCheckbox
                            wrapperClass='d-flex justify-content-center mb-4'
                            id='form6Example8'
                            label=' Negociable '
                            defaultChecked
                        />

                    </form>

                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; #2 Photos article </>}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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

                        <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
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
                            Place order
                        </MDBBtn>
                    </form>


                    </MDBAccordionItem>
                 </MDBAccordion>

         </div>
        </div>

    );
}

export default Selling;