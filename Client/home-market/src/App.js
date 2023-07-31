import {React, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import contextProvider from './Context.jsx';

import Header from './Shared Components/Header.jsx';
import Footer from './Shared Components/Footer.jsx';


 import Home from './Home';
 import Search from './Search';
 import Selling from './Selling';
 import Profil from './Profil.jsx';
 import MyItems from './MyItems.jsx';


 import Register from './Register';
 import Login from './Login';

 

// import VendreMeuble from './VendreMeuble';

const App = () => {
  const [loggedUser,setLoggedUser] = useState(undefined);
  
  const context = {
      loggedUser: loggedUser,
      setLoggedUser
  }
  return (
    <contextProvider.Provider value={context}>
      <Router>
        <Header />
        <Routes>

        {/* /* composant Switch de React Router 

        SERT A CREER LE PATH : lier le path de la page à une page jsx de mon code 

        pour retourner les composants Home, Search et VendreMeuble en fonction de l'URL courante.*/}
          
          {/* To return to the jsx file  */}
          <Route  path="/" element={<Home />} />
          <Route  path="/Search" element={<Search />} />
          <Route  path="/Selling" element={<Selling />} />

          <Route  path="/Login" element={<Login />} />
          <Route  path="/Register" element={<Register />} />
          <Route  path="/MyItems" element={<MyItems />} />
  
          <Route  path="/Profil" element={<Profil />} />





          

          {/* exact path si c exactement la bonne url  */}


          {/* 
          // autre syntax :
          {<Route exact path="/" component={Home} /> }
          {<Route exact path="./Search" component={Search} /> */}
          {/* <Route path="/vendre" component={VendreMeuble} /> */} 


        </Routes>
      <Footer />
      </Router>
    </contextProvider.Provider>
  
  );
};

export default App;




// CE QUI AVAIT DE BASE 

// import './App.css';
// import logo from './Images/homeMarketLogo.png';

 