import React from 'react';
import { Contact } from '../contact';
import Sidenav from "./sidenav";
import { DatePicker, Space } from 'antd';



export const ExtraitRegistre = (props) => {
    return (
        
       <div class="container">
          <Sidenav />
          <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
          <h3>Extrait  registre</h3>
           <form class="form-inner-container mt-2 mt-sm-5">
           <div className="form-group d-flex justify-content-center">
           
           <i class="bi bi-people-fill" style={{height:200 , fontSize: "40px"}}></i> 
          
           <div className="form-group d-flex justify-content-center">
           
           <span> شخص طبيعي</span>
           &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<br></br><br></br><br></br><br></br><br></br>
<span>Personne Physique</span>
</div>
           <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{height:50,width:70}}/>
    </div>
    <i class="bi bi-building" style={{fontSize: "40px"}}></i>
    <span>شخص معنوي</span>
    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
<span>Personne Morale</span>
</div>
            <div className="form-group d-flex justify-content-center">
                
                <span>IDENTIFIANT UNIQUE</span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <span>المعرف الوحيد</span>
                
                    </div>
            
            
            <div className="form-group d-flex justify-content-center">
                
            
                <input type="text" placeholder="" class="form-control " style={{ width: "400px" }} />
                </div>
                <div className="form-group ">

                <button>Réinitialiser
                    <i class="zmdi zmdi-arrow-right"></i>
                </button>
                <button>Suivant
                    <i class="zmdi zmdi-arrow-right"></i>
                </button>
               </div>
                </form>
           
     
        </div>
        
    );
  };
  