import React, { useState, useEffect } from 'react';
import { Contexto } from './Contexto';

import Footer from './Footer';
import Info from './Info';
import Mapa from './Mapa';
import Titulo from './Titulo';

function App() {

   const [datos, setDatos] = useState([])
   const [info, setInfo] = useState([])
   

   useEffect(() => {
        obtenerDatos()
     }, [])

      
   const obtenerDatos = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const datos = await data.json()
      setDatos(datos)
      console.log(JSON.stringify(datos))
   }
   

   const mostrarDatos=(e)=>{
      const seleccionInfo = datos.map(item =>  item[e.target.name] )
      setInfo(seleccionInfo)         
             
   }
   
     
   return (
      <Contexto.Provider value={{mostrarDatos,info}}>
         
         <Titulo />
         
         <div className="row">
            <div className="col-4 text-center">
               <Info />
            </div>
            <div className="col-8 text-center">
               <Mapa />
            </div>
         </div>
                  
          <Footer/>
         
      </Contexto.Provider>
   );
}

export default App;
