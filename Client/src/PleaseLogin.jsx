import React from 'react';
import { Link } from 'react-router-dom';



function PleaseLogin(){

    return (
        <>
            <h1>To Access This Page Please Login First</h1>
            <Link to={'/Login'}>Right Here!</Link>
        </>
    )
}

export default PleaseLogin;