import React, { useContext, useState } from 'react';
import { Contexto } from './Contexto';



const Login = () => {

   const { setLogin, setFlag2 } = useContext(Contexto)
   const [user, setUser] = useState()
   const [pass, setPass] = useState()


   const submit = (e) => {
      e.preventDefault()
      e.target.reset()
      setUser('')
      setPass('')
      if (user === "pen" && pass === "100") {
         setLogin(true)

      } else {
         alert("En algo le pifiaste, Proba con P: pen U: 100 ")
      }
   }


   return (

      <div className="container text-center mt-5 form row ">
         <div className="d-flex justify-content-center col-12 ">
            <div className="col-4 bg-dark p-3 trans">
               <form onSubmit={submit} >
                  <input
                     type="text"
                     placeholder="Usuario"
                     className="form-control form-control-sm mb-2"
                     onChange={(e) => setUser(e.target.value)}
                  />
                  <input
                     type="pass"
                     placeholder="Contraseña"
                     className="form-control form-control-sm mb-2"
                     onChange={(e) => setPass(e.target.value)}

                  />
                  <div class=" d-flex justify-content-around">
                     <button className="btn btn-primary  btn-login btn-sm mt-1" type="submit">Login</button>
                     <button className="btn btn-primary btn-login  btn-sm mt-1" onClick={() => setFlag2(false)} >Cerrar</button>
                  </div>
               </form>
            </div>
         </div>


      </div>

   );
}

export default Login;