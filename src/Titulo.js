import React, { useContext } from 'react';
import { Contexto } from './Contexto';
import Form from './Form'
import Login from './Login'
import logo from './assets/penlogo.png';

const Titulo = () => {

   const { login, setLogin, flag, setFlag, flag2, setFlag2 } = useContext(Contexto)



   const formulario = () => {
      if (login) {
         setFlag2(false)
         setFlag(true)

      } else {
         alert("Ops, parece que no estas Autorizado")
      }
   }

   const formLogin = () => {
      if (!login) {
         setFlag(false)
         setFlag2(!flag2)
      } else {
         setLogin(false)
         setFlag(false)
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

               {
                  login ? <span className="topLinks" onClick={formLogin}  >Logout&nbsp;|&nbsp;</span>
                     : <span className="topLinks" onClick={formLogin}  >Login</span>
               }
               {
                  login && <span className="topLinks" onClick={formulario}>Load</span>
               }
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