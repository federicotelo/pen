import React, { useContext } from 'react';
import { Contexto } from './Contexto';
import { AiOutlineCloseCircle } from 'react-icons/ai'


const Info = () => {

   const { info, setInfo } = useContext(Contexto)

   return (
      <div id="infoContainer" >
         <span onClick={() => setInfo([])} className="align-top float-end m-3 mt-1 topLinks"><AiOutlineCloseCircle size="20px" /></span>
         <div id="info" className="mt-2">


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