import logo from './logo.svg';
import React, {useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalHomePage from './pages/PersonalHomePage/PersonalHomePage'
import BusinessHomePage from './pages/BusinessHomePage/BusinessHomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {DarkModeContext} from './context/DarkModeContext';
import 'antd/dist/antd.css'
function App() {
  // const {darkMode} = useContext(DarkModeContext);

  return (
    <Router>

<Routes>
<Route exact path="/" element={<PersonalHomePage/>} />
<Route exact path="/business" element={<BusinessHomePage/>} />

{/* <div className="app">
      <div 
      // className={darkMode ? `Container Container-dark` : `Container Container-light`}
      >


      </div>
    </div> */}
</Routes>

    </Router>
 
  );
}

export default App;
