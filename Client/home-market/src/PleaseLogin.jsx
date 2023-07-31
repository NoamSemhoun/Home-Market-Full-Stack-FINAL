import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';




function PleaseLogin(){

    return (
        <>    
        
        <div  fluid className='flex justify-content-center align-items-center'>
            <div  fluid className='d-flex justify-content-center align-items-center'>
                <img src="https://media.istockphoto.com/id/1239296821/pt/vetorial/log-in-password-blue-icon-sign-in-info.jpg?s=612x612&w=0&k=20&c=23yMBIGLJjWqjy4BmFNYCzwRIMj-ijLtFseJkgtg4MM="
                  className='mb-5 img-thumbnail w-25  '     alt="iagLogin"></img>
                            
            </div>

            <h1 className=' mb-5  text-center'>To Access this Page, Please Login First</h1>


            <div  fluid className='mb-5 d-flex justify-content-center align-items-center'>

            <Link to={'/Login'}>
                <Button variant="outline-dark" className="border" alt="iLogin" >Right Here !</Button>
            </Link>
            </div>

        </div>

            
        </>
    )
}

export default PleaseLogin;