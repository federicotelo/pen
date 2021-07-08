import React, { useContext } from 'react';
// import { Contexto } from './Contexto';



const Login = () => {

   // const { } = useContext(Contexto)

   const submit = (e) => {
      e.preventDefault()
      // e.target.reset()
      // setPais('')
      // setCodigo('')
      // setInf('')
   }


   return (

      <div className="container text-center mt-5 form row ">
         <div className="d-flex justify-content-center col-12">
            <div className="col-4 bg-dark p-3">
               <form onSubmit={submit} >
                  <input
                     type="text"
                     placeholder="Usuario"
                     className="form-control form-control-sm mb-2"
                  // onChange={(e) => setUsuario(e.target.value)}
                  />
                  <input
                     type="pass"
                     placeholder="Contraseña"
                     className="form-control form-control-sm mb-2"
                  // onChange={(e) => setUsuario(e.target.value)}

                  />
                  <button className="btn btn-primary btn-block small" type="submit">Login</button>
               </form>
            </div>
         </div>


      </div>

   );
}

export default Login;