import React, { useContext, useState } from 'react';
import { Contexto } from './Contexto';
import Form from './Form'
import Login from './Login'
import logo from './assets/penlogo.png';

const Titulo = () => {

   const { login, setLogin } = useContext(Contexto)

   const [flag, setFlag] = useState(false)
   const [flag2, setFlag2] = useState(false)

   const formulario = (e) => {
      if (login) {
         setFlag2(false)
         setFlag(!flag)
         !flag ? e.target.innerText = "Ocultar" : e.target.innerText = "Load"
      } else {
         alert("Ops, parece que no estas Autorizado")
      }
   }

   const formLogin = (e) => {
      if (!login) {
         setFlag(false)
         setFlag2(!flag2)
      } else {
         setLogin(false)
         alert()
      }

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

               {login ? <span className="topLinks" onClick={formLogin}  >logout</span>
                  : <span className="topLinks" onClick={formLogin}  >login</span>
               }
               &nbsp;|&nbsp;
               <span className="topLinks" onClick={formulario}>load</span>
            </div>
         </div>
         {
            flag && <Form />
         }
         {
            (flag2 && !login) && <Login />
         }


      </div>
   );
}

export default Titulo