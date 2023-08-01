import {React, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from './Hooks';
import  { useState } from 'react';
import contextProvider from './Context';
import { callServer } from './util';

import {
    MDBRow,
    MDBAccordion,
    MDBAccordionItem, 
    MDBCol,
    MDBInput,
    MDBIcon,
    MDBContainer,
    MDBInputGroup,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Selling() {
    const {handleInputChange, handleFileChange, formData,formFilesData} = useForm();
    const {loggedUser} = useContext(contextProvider);

    const handleSubmit = async (event)=>{
        event.preventDefault();

        formFilesData.set('item',JSON.stringify(formData));
        formFilesData.set('apiKey',loggedUser.apiKey);


        const item = await callServer(
            `http://127.0.0.1:3001/items/upload`, 
            'post',
            formFilesData, 
            'multipart/form-data'
        );

        if (!item.error){
            console.log(item.data);
        }else{
          console.log(item.error);
        }
    }


    // FOR THE NEXT STEP BOUTTON IN ACCORDION ITEM 
    const [activeItem, setActiveItem] = useState(1);

    const toggleAccordion = (itemIndex) => {
      setActiveItem(itemIndex);
    };
  
    const handleNext = () => {
      if (activeItem < 3) {
        toggleAccordion(activeItem + 1);
      }
    };

    return (
        
        <div className="container">

            <div className="container d-flex justify-content-center align-items-center vh-10 mt-5">
                 <h1 className="text-center display-4  mb-4">Selling Your furniture</h1>
                

                 
            </div>       
                      <h2 className="text-center display-7"> Post your listing with this Forms in 3 Steps </h2>
                

 
            <div className="justify-content-center mt-5" style={{ minWidth: '30%'}}>
            {/* d-flex   les propriétés de flexibilité   OU ::   , maxWidth: '80%' */}

                    <MDBAccordion initialActive={1}>
                    <MDBAccordionItem show={activeItem === 1} collapseId={1} headerTitle={<> &nbsp; #1 Details aticle </>}>
                       
                    <form>
                        <MDBRow className='mb-4'>

                            <MDBCol size="4" >
                            <MDBInput size="lg" 
                            //  defaultValue ='Table IKEA name '            //  style= 'color = gray'
                            placeholder="Table IKEA name "   
                            // id='validationCustom02'
                            // required
                             id='form6Example1'
                               label='Tittle' 
                               onChange={handleInputChange}
                               name='title'
                               />
                            </MDBCol> 

                            <MDBCol size="4" >
                             <Form.Select label='Category ' size="lg" onChange={handleInputChange} name='category'>
                                  <option value={''}>Select Category </option> 
                                  {/* mettre par default  */}
                                <option>Sofa </option>
                                <option>Bed </option>
                                <option>Table </option>

                            </Form.Select>
                            <br />
                            </MDBCol>
                            

                            <MDBCol size="4">
                                <MDBInputGroup size="lg"   textAfter={['.00','$' ]}>
                                    <input className='form-control' type='number' onChange={handleInputChange} name='price'/>
                                </MDBInputGroup>
                                Price
                            </MDBCol>
                            
                        </MDBRow>

                        <MDBRow className='mb-4'>

                            <MDBCol size="4" >
                            {/* <MDBInput size="lg" 
                            // defaultValue='IKEA ' 
                            //  style= 'color = gray'
                            placeholder=" IKEA "

                            id='form6Example1' label='Brand Name' /> */}

                            <MDBInput wrapperClass='mb-4' id='form6Example3' label='URL Brand ' onChange={handleInputChange} name='brandUrl'/>

                            </MDBCol>



                            <MDBCol size="4" >
                            <Form.Select label='Category ' size="lg"  onChange={handleInputChange} name='status'>
                                <option value={''}>Select State Condition </option> 
                                {/* mettre par default  */}
                                <option>New </option>
                                <option>Excellent / Like New  </option>
                                <option>Good </option>
                                <option>Fair / Used  </option> 
                                <option>Refurbished  </option>
                                <option>Needs Repair </option>
                                <option>For Parts </option>


                            </Form.Select>
                             
                            </MDBCol>

                            <MDBCol size="4" >

                                {/* <MDBCheckbox
                                wrapperClass='d-flex justify-content-center mb-4'
                                id='form6Example8'
                                label=' Negociable '
                                defaultChecked
                               /> */}

                                <MDBContainer className="p-4">
                                    <div className="form-check form-switch mb-4">
                                        <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="formSwitch"
                                        defaultChecked
                                        onChange={handleInputChange}
                                        name='delivery'
                                        />
                                        <label className="form-check-label fs-4 align-middle" htmlFor="formSwitch">

                                        Delivery possible
                                        </label>
                                    </div>
                                    </MDBContainer>
                          
                            </MDBCol>

                            </MDBRow>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                            <Form.Label>Description area</Form.Label>
                            <Form.Control as="textarea" rows={3}  name='description'  placeholder=" Dimension, date, negociable .... " onChange={handleInputChange}/>
                        </Form.Group>                        
                        
                        
                        {/* <button onClick={handleNext}>Next</button> */}

                    </form>

                    </MDBAccordionItem>
                    <MDBAccordionItem show={activeItem === 2} collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; #2 Photos article </>}>
                        
                        Including photos in a furniture listing is essential for attracting potential buyers, 
                        building trust, and providing visual information. 
                        It enhances the listing's appeal and helps buyers make informed decisions.
                        <MDBInputGroup
                            className='mb-3 mt-5'
                            textBefore='Upload the main photo :'

                            textTag='label'
                            textProps={{ htmlFor: 'inputGroupFile01' }}
                            onChange={handleFileChange}
                        >
                             
                        <input name="main-image" className='form-control' type='file' id='inputGroupFile01' />
                               
                         <br></br>
                           
                        </MDBInputGroup>
                    
                        <Form.Group controlId="formImages" onChange={handleFileChange}>
                            <Form.Label>Upload other Images</Form.Label>
                            <Form.Control name="images" type="file" multiple  />
                        </Form.Group>


                        {/* <button onClick={handleNext}>Next</button> */}

                    </MDBAccordionItem>
                    <MDBAccordionItem show={activeItem === 3} collapseId={3} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; #3  Personnal Information </>}>
                        
                    <form onSubmit={handleSubmit}>
                        <MDBRow className='mb-4'>
                            <MDBCol>
                            <MDBInput 
                            // id='form6Example1' 
                            label='First name' 
                             id='validationCustom02'
                             required
                             />

                            <div className='invalid-feedback'></div> 
                            {/* placé directement après le champ de saisie avec lequel il est associé */}

                            </MDBCol>
                            <MDBCol>
                            <MDBInput id='form6Example2' label='Last name' />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='mb-4'>
                            <MDBCol>
                            <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
                            </MDBCol>
                            <MDBCol>
                            <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />
                            </MDBCol>
                        </MDBRow>

                        <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
                               

                        {/* <MDBCheckbox
                            wrapperClass='d-flex justify-content-center mb-4'
                            id='form6Example8'
                            label='Create an account?'
                            defaultChecked
                        /> */}

                        <MDBBtn className='mb-4' type='submit' >
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