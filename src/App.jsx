import { useState, useEffect } from "react";
import { Contact } from "./components/contact";
import { RecherchePersonne } from "./components/recherchePersonne/recherchePersonne";
import { RechercheSociete } from "./components/rechercheSociete/rechercheSociete";
import {ExtraitRegistre} from "./components/extrait registre/extrait"
import { BrowserRouter as Router, Routes, Route,NavLink } from "react-router-dom";
import {Home} from "./components/home";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavBar from "./components/navbar";
import "./App.css";




function App() {

  return (
    <>
    <div>
     
    <Router>

        <NavBar />

        <div className="pages">
          <Routes>
          <Route exact path='/' element={<Home />} />   

          <Route exact path='/recherchePersonne' element={<RecherchePersonne />} />   
          <Route exact path='/RechercheSociete' element={<RechercheSociete />} />   
        <Route exact path="/extraitRegistre"  element={<ExtraitRegistre/>}/>
          </Routes>
          <Contact/>
          </div>
        
      </Router>


      
    </div>
  
    </>
  );
};

export default App;
