import React, { useContext } from 'react';
import { Contexto } from './Contexto';



const Form = () => {

   const { cargarDatos, setInf, setCodigo, setPais, setFlag } = useContext(Contexto)

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
                     required
                  />
                  <input
                     type="number"
                     placeholder="Ingrese Valor"
                     className="form-control form-control-sm mb-2"
                     onChange={(e) => setInf(e.target.value)}
                     required
                  />
                  <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                     <button className="btn btn-primary  btn-sm mt-1" type="submit">Agregar</button>
                     <button className="btn btn-primary  btn-sm mt-1" onClick={() => setFlag(false)} >Cerrar</button>

                  </div>
               </form>
            </div>
         </div>


      </div>

   );
}

export default Form;