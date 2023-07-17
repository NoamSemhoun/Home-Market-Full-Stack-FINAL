import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Shared Components/Header.jsx';
// import Footer from './Footer';

 import Home from './Home';
 import Search from './Search';

// import VendreMeuble from './VendreMeuble';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>

      {/* /* composant Switch de React Router 
      pour retourner les composants Home, Search et VendreMeuble en fonction de l'URL courante.*/}
        
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Search/>} />

        {<Route exact path="/" component={Home} /> }
        {<Route path="/recherche" component={Search} />
        /* <Route path="/vendre" component={VendreMeuble} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;




// CE QUI AVAIT DE BASE 

// import './App.css';
// import logo from './Images/homeMarketLogo.png';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           THIS IS IN CONSTRUCTION ! <br></br>
//           Home market in developpement 
//           <br></br><br></br>
//           see you ...
//         </p>

        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
