import React from 'react';
import { Contact } from '../contact';
import Sidenav from "./sidenav";
import { DatePicker, Space } from 'antd';



export const RecherchePersonne = (props) => {
    return (
        
       <div class="container">
          <Sidenav />
          <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
          <h3>Recherche personne physique</h3>
           <form class="form-inner-container mt-2 mt-sm-5">
         
            <div className="form-group d-flex justify-content-center">
                
                <span>IDENTIFIANT UNIQUE</span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <span>المعرف الوحيد</span>
                
                    </div>
            
            
            <div className="form-group d-flex justify-content-center">
                
            
                <input type="text" placeholder="" class="form-control " style={{ width: "400px" }} />
                </div>
                <span>NUMÉRO PIÈCE D'IDENTITÉ</span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
               <span >عدد الهوية</span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
               <span >ETAT DU REGISTRE </span>
               <div lang="ar" dir="rtl"><span> حالة السجل</span></div>

                <div class="form-group  d-flex justify-content-center">

                    <input type="text" placeholder="" class="form-control"/><br></br>
             

                    <select name="" id="" class="form-control " style={{width:600}}>
                        <option value="" disabled selected></option>
                        <option value="Actif">Actif</option>
                        <option value="non actif">Non actif</option>
                    </select>
                    <i class="zmdi zmdi-caret-down" style={{ fontSize: '17px'}}></i>

                </div>
                <span>BUREAU REGIONAL</span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                 <span >المكتب الجهوي </span>&ensp;&ensp;
                 <span>ANNEE DE CREATION</span>
                 <div  dir="rtl"> <span > سنة التأسيس</span></div>

                <div class="form-group form-group d-flex justify-content-center">
               
                <select name="" id="" class="form-control">
                        <option value="" disabled selected></option>
                        <option value="Actif">API Sfax</option>
                        <option value="non actif">API Sousse</option>
                        <option value="non actif">API Tunis</option>
                        <option value="non actif">Ariana</option>
                        <option value="non actif">Baja</option>
                        <option value="non actif">Ben Arous </option>
                        <option value="non actif">Bizerte</option>
                        <option value="non actif">Gabes</option>
                        <option value="non actif">Gafsa</option>
                        <option value="non actif">Gasserine </option>
                        <option value="non actif"> Grombalia </option>
                        <option value="non actif">Guchet Central</option>
                        <option value="non actif">Instance Tunisienne d'Investissement</option>
                        <option value="non actif">Jandouba</option>
                        <option value="non actif">Juridiction web</option>
                        <option value="non actif"> Kairouan</option>
                        <option value="non actif"> Kebelli</option>
                        <option value="non actif"> Le Kef</option>
                        <option value="non actif"> Mahdia</option>
                        <option value="non actif"> Mannouba</option>
                        <option value="non actif"> Mednine</option>
                        <option value="non actif"> Monastir</option>
                        <option value="non actif"> Nabeul </option>
                        <option value="non actif"> RNE</option>
                        <option value="non actif">  Seliana </option>
                        <option value="non actif"> Sfax</option>
                        <option value="non actif"> Sfax2</option>
                        <option value="non actif"> Sidi Bou Zid </option>
                        <option value="non actif"> Sousse</option>
                        <option value="non actif">Sousse 2 </option>
                        <option value="non actif"> Tataouin</option>
                        <option value="non actif"> Tozeur</option>
                        <option value="non actif">Tunis 1 </option>
                        <option value="non actif"> Tunis 2</option>
                        <option value="non actif"> Zaghouan</option>
                    </select>

                    <i class="zmdi zmdi-caret-down" style={{ fontSize: '17px'}}></i> <select name="" id="" class="form-control">
                        <option value="" disabled selected></option>
                        <option value="Actif">1995</option>
                        <option value="non actif">1996</option>
                        <option value="non actif">1997</option>
                        <option value="non actif">1998</option>
                        <option value="non actif">1999</option>
                        <option value="non actif">2000 </option>
                        <option value="non actif">2001</option>
                        <option value="non actif">2002</option>
                        <option value="non actif">2003</option>
                        <option value="non actif">2004 </option>
                        <option value="non actif"> 2005 </option>
                        <option value="non actif">2006</option>
                        <option value="non actif">2007</option>
                        <option value="non actif">2008</option>
                        <option value="non actif">2009</option>
                        <option value="non actif"> 2010</option>
                        <option value="non actif"> 2011</option>
                        <option value="non actif"> 2012</option>
                        <option value="non actif"> 2013</option>
                        <option value="non actif"> 2014</option>
                        <option value="non actif"> 2015</option>
                        <option value="non actif"> 2016</option>
                        <option value="non actif"> 2017 </option>
                        <option value="non actif">2018</option>
                        <option value="non actif"> 2019 </option>
                        <option value="non actif"> 2020</option>
                        <option value="non actif"> 2021</option>
                        <option value="non actif"> 2022 </option>
                      
                    </select>
                    <i class="zmdi zmdi-caret-down" style={{ fontSize: '17px'}}></i>
                </div>
                <span>NOM ET PRENOM</span>
                <div lang="ar" dir="rtl" >
                 <span >الاسم و اللقب</span></div>
                <div class="form-group form-group d-flex justify-content-center">
                   
                    <input type="text" placeholder="" class="form-control"/>
                    
             
                    <input type="text" placeholder="" class="form-control"/>
                   
                </div>
                <span>NOM COMMERCIAL</span>
                <div lang="ar" dir="rtl" >
                 <span >الاسم التجاري</span></div>
                <div class="form-group form-group d-flex justify-content-center">
                    <input type="text" placeholder="" class="form-control"/>
                    
             
                    <input type="text" placeholder="" class="form-control"/>
                   
                </div>
                <span>LIBELLE DE L'ACTIVITE</span>
                <div lang="ar" dir="rtl" >
                 <span >موضوع النشاط</span></div>
                <div class="form-group form-group d-flex justify-content-center">
                    <input type="text" placeholder="" class="form-control"/>
                    
             
                    <input type="text" placeholder="" class="form-control"/>
                   
                </div>
                <button>Recherche
                    <i class="zmdi zmdi-arrow-right"></i>
                </button>
               
                </form>
           
     
        </div>
        
    );
  };
  