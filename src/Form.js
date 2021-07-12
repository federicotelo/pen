import React, { useContext } from 'react';
import { Contexto } from './Contexto';
import { countries } from './assets/paises'



const Form = () => {

   const { cargarDatos, setInf, setCodigo, setPais, setFlag } = useContext(Contexto)

   const submit = (e) => {
      e.preventDefault()
      cargarDatos()
      e.target.reset()
      setInf('')
      setPais('')
      setCodigo('')
   }

   const setearCodigo = (e) => {
      setPais(e.target.value)
      countries.forEach(countrie => {
         if (countrie.name_es === e.target.value)
            setCodigo(countrie.code)
      })

   }


   return (

      <div className="container text-center mt-5 form row ">
         <div className="d-flex justify-content-center col-12">
            <div className="col-4 bg-dark p-3 trans">
               <form onSubmit={submit} >

                  <select
                     type="text"
                     className="form-control form-control-sm mb-2"
                     onChange={setearCodigo}
                     required
                  >
                     <option value="">Elige una Pais...</option>
                     {
                        countries.map(countrie =>
                           <option key={countrie.code}>{countrie.name_es}</option>
                        )
                     }
                  </select>

                  <input
                     type="number"
                     placeholder="Ingrese Valor"
                     className="form-control form-control-sm mb-2"
                     onChange={(e) => setInf(e.target.value)}
                     required
                  />

                  <div className=" d-flex justify-content-around">
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