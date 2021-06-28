import React, { useContext } from 'react';
import { Contexto } from './Contexto';



const Boton = ({infoDeseada}) => {

   const {mostrarDatos} = useContext(Contexto)

   return ( 
      
      <button className="btn btn-primary mt-2" 
                name={infoDeseada}
                 onClick={mostrarDatos}
                 >Obtener {infoDeseada}
         </button>
    
    );
}
 
export default Boton;