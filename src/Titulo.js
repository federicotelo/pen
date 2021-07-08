import React, { useState } from 'react';
import Form from './Form'
import Login from './Login'
import logo from './assets/penlogo.png';

const Titulo = () => {

   const [flag, setFlag] = useState(false)
   const [flag2, setFlag2] = useState(false)

   const formulario = () => {
      setFlag2(false)
      setFlag(!flag)
   }

   const login = () => {
      setFlag(false)
      setFlag2(!flag2)
   }

   return (

      <div className="container">
         <div className="row">
            <div className="col">
               <img id="imgtit" src={logo} alt="logo" width="100" height="59" />
            </div>
            <div className="col-8">

               <span className="titulo" >Global Observatory for Freedom of Expression</span>
               <br />
               <span className="subtitulo" >Since 1921 guardians of Freedom of Expression around the world.</span>
            </div>

            <div className="col actionLinks">

               <span className="topLinks" onClick={login}  >login</span>
               &nbsp;|&nbsp;
               <span className="topLinks" onClick={formulario}>load</span>
            </div>
         </div>
         {
            flag && <Form />
         }
         {
            flag2 && <Login />
         }


      </div>
   );
}

export default Titulo