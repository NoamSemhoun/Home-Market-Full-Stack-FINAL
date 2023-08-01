import React, { useContext, useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from './itemCard';

// const Search = () => {
  import {
    MDBContainer,
  } from "mdb-react-ui-kit";
import contextProvider from './Context';
import { callServer } from './util';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



  function MyItems() {

    const {loggedUser} = useContext(contextProvider);
    const [data, setData] = useState([]);

    // useEffect(() => {
    //   // This effect runs only once when the component mounts
    //   fetchDataFromServer();
    // }, []); // Empty dependency array
  
    // const fetchDataFromServer = async () => {
    //   try {
    //     const response = await callServer('http://127.0.0.1:3001/items/','post',{apiKey:loggedUser.apiKey});
    //     setData(response.data);
    //     console.log(response.data)
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
  return (

        <MDBContainer fluid className="my-5 text-center mx-auto  ">


          <h4 className="mt-4 mb-5">
            <strong>All My items Furniture </strong>
          </h4>

          {!data && (
             <div  fluid className='flex justify-content-center align-items-center'>
            
             <h1 className=' mb-5 text-warning text-center'>You don't have items...,</h1>
 
              <Link to="/Selling">
                <Button variant="outline-dark" className="border" alt="iLogin">
                  Click Here To Upload One!
                </Button>
              </Link>
            </div>
          )}

          

          {/* CATALOGUE  */}
          {data && data.map((item => <ItemCard itemData={item}></ItemCard>))}

        </MDBContainer>
      );
}

export default MyItems;