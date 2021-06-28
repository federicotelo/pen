import React, { useContext } from 'react';
import { Contexto } from './Contexto';


const Info = () => {

   const {info} = useContext(Contexto)
      
   return (
      <>
         <h1>INFO</h1>
         
         <ul>
            {
               info.map((item,index) =>
                  <li key={index}> {item} </li>
               )
               
            }
         </ul>
                
      </>
   );
}

export default Info