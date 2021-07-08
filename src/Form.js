import React, { useContext } from 'react';
import { Contexto } from './Contexto';



const Form = () => {

   const { cargarDatos, setInf, setCodigo, setPais } = useContext(Contexto)

   const submit = (e) => {
      e.preventDefault()
      cargarDatos()
      e.target.reset()
      setPais('')
      setCodigo('')
      setInf('')
   }


   return (

      <div className="container text-center mt-5 form row ">
         <div className="d-flex justify-content-center col-12">
            <div className="col-4 bg-dark p-3">
               <form onSubmit={submit} >
                  <input
                     type="text"
                     placeholder="Ingrese Pais"
                     className="form-control form-control-sm mb-2"
                     onChange={(e) => setPais(e.target.value)}
                  />
                  <input
                     type="text"
                     placeholder="Ingrese Codigo"
                     className="form-control form-control-sm mb-2"
                     onChange={(e) => setCodigo(e.target.value)}
                     maxLength="2"
                  />
                  <input
                     type="number"
                     placeholder="Ingrese Valor"
                     className="form-control form-control-sm mb-2"
                     onChange={(e) => setInf(e.target.value)}
                  />
                  <button className="btn btn-primary btn-block small" type="submit">Agregar</button>
               </form>
            </div>
         </div>


      </div>

   );
}

export default Form;