import React, { useContext } from 'react';
import { Contexto } from './Contexto';


const Info = () => {

   const { info } = useContext(Contexto)

   return (
      <div id="infoContainer">
         <div id="info">

            <ul type="none">
               {
                  info.map((item, index) =>
                     <li key={index}> {item.pais}: {item.info} </li>
                  )
               }
            </ul>
         </div>
      </div>
   );
}

export default Info