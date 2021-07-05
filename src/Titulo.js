import React from 'react';
import logo from './assets/penlogo.png';

const Titulo = () => {
   return (

      <div class="container">
               <div class="row">
                  <div class="col">
                     <img id="imgtit" src={logo} alt="logo" width="100" height="59"/>
                  </div>
                  <div class="col-8">

                     <span className="titulo" >Global Observatory for Freedom of Expression</span>
                     <br/>
                     <span className="subtitulo" >Since 1921 guardians of Freedom of Expression around the world.</span>
                  </div>

                  <div class="col actionLinks">
                     <span class="topLinks" onClick="popupModal('login')">login</span>
                     &nbsp;|&nbsp;
                     <span class="topLinks" onClick="popupModal('load')">load</span>
                  </div>
               </div>

      </div>
   );
}
 
export default Titulo 