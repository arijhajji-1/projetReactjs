import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
    
    <nav id='menu' className='navbar navbar-expand-lg navbar-default navbar-fixed-top'>
   
        
        
    <NavLink exact to="/" className="nav-logo">
      
      <img src="../img/logo.png" alt="majesteye" width={209} height={50} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 1, justifyContent: 'center', alignItems: 'center'}} />
 
             
           </NavLink>
         
        
     
         
  
     
       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
     
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
         
      

      
             
    
       
           <ul className='nav navbar-nav navbar-right'>
          <li>
          
          <NavLink to="/RecherchePersonne" className='page-scroll' style={{fontSize: "15px"}}>Recherche Personnes
           </NavLink>
        </li>
        <li>
        <NavLink to="/RechercheSociete" className='page-scroll' style={{fontSize: "15px"}}>Recherche Sociètés
           </NavLink>
        </li>
        <li>
        <NavLink to="/extraitRegistre" className='page-scroll' style={{fontSize: "15px"}}>Extrait Registre
           </NavLink>
        </li>
        <li>
        <NavLink to="/BulletinOfficiel" className='page-scroll' style={{fontSize: "15px"}}>Bulletin Officiel
           </NavLink>
        </li>
        <li>
        <NavLink to="/convocation" className='page-scroll' style={{fontSize: "15px"}}>Convocation Assemblée Générale
           </NavLink>
        </li>
    
        <li>
        <NavLink to="/payer" className='page-scroll' style={{fontSize: "15px"}}>Payer une redevance
           </NavLink>
        </li>
        <li>
        <NavLink to="/immatriculer" className='page-scroll' style={{fontSize: "15px"}}>Immatriculer  Entreprise
           </NavLink>
          
  
        </li>
        
        <li> <i class="bi bi-cart"  style={{fontSize: "40px" ,position: 'right', top: 0, left: 0, right: 10000, bottom: 0, justifyContent: 'center', alignItems: 'center'}} ></i>
          <i class="bi bi-person-circle" style={{fontSize: "40px" ,position: 'right', top: 0, left: 0, right: 10000, bottom: 0, justifyContent: 'center', alignItems: 'center'}} ></i> Se Connecter
          <br></br>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          Creer un Compte
          </li>
          </ul>
       
        </div>
        
     
       
      </nav>
    </>
  );
}

export default NavBar;
