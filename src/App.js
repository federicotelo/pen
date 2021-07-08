import React, { useState, useEffect } from 'react';
import { Contexto } from './Contexto';
import axios from 'axios'

import Footer from './Footer';
import Info from './Info';
import Mapa from './Mapa';
import Titulo from './Titulo';
import Form from './Form';



function App() {

   const [datos, setDatos] = useState([])
   const [info, setInfo] = useState([])
   const [mapData, setMapData] = useState([])
   const [pais, setPais] = useState('')
   const [codigo, setCodigo] = useState('')
   const [inf, setInf] = useState('')


   useEffect(() => {
      obtenerDatos()

   }, [])

   useEffect(() => {
      separarDatos()

   }, [datos])

   const obtenerDatos = async () => {
      const data = await axios.get('http://localhost:4000/api/datos/')
      setDatos(data.data)

   }

   const separarDatos = () => {
      let aux = {}
      for (const items of datos) {
         aux = { ...aux, [items.codigo]: items.info };
      }
      setMapData(aux)
   }
   console.log(mapData)


   const cargarDatos = async () => {
      await axios.post('http://localhost:4000/api/datos/', {
         pais: pais,
         codigo: codigo.toUpperCase(),
         info: inf
      });
      console.log("datos cargados")
      obtenerDatos()
   }


   const mostrarDatos = (e, countryCod) => {
      console.log(countryCod)
      let data = datos.filter(item => item.codigo === countryCod)
      setInfo(data)
      Array.from(document.getElementsByClassName("jvectormap-tip")).forEach((el) => { el.style.display = "none" });
   }


   return (
      <Contexto.Provider value={{ mostrarDatos, info, cargarDatos, setInf, setCodigo, setPais, mapData }}>

         <Titulo />
         <Mapa />
         <Info />
         <Footer />

      </Contexto.Provider>
   );
}

export default App;
