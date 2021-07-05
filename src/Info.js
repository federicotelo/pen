import React, { useContext } from 'react';
import { Contexto } from './Contexto';


const Info = () => {

   const {info} = useContext(Contexto)
      
   return (
      <div id="infoContainer">
         <div id="info">
            <span className="titulo">INFO</span>
            <ul>
               {
                  info.map((item,index) =>
                     <li key={index}> {item} </li>
                  )
               }
            </ul>
         </div>
      </div>
   );
}

export default Info