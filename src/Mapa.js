import React, { useContext } from "react";
import { Contexto } from './Contexto';
import { VectorMap } from "react-jvectormap";

// const mapData = {
//    CN: 100000,
//    IN: 9900,
//    SA: 86,
//    EG: 70,
//    SE: 0,
//    FI: 0,
//    FR: 0,
//    US: 20,
//    AR: 5000
//  };


const Map = () => {


   const { mostrarDatos, mapData } = useContext(Contexto)


   return (

      <VectorMap
         map={"world_mill"}
         backgroundColor="transparent" //change it to ocean blue: #0077be
         zoomOnScroll={true}
         containerStyle={{
            width: "100%",
            height: "500px"
         }}
         zoomAnimate={true}
         onRegionClick={mostrarDatos} //gets the country code
         containerClassName="map"
         regionStyle={{
            initial: {
               fill: "#FFF",
               "fill-opacity": 0.9,
               stroke: "none",
               "stroke-width": 0,
               "stroke-opacity": 0
            },
            hover: {
               "fill-opacity": 0.8,
               cursor: "pointer"
            },
            // selected: {
            //    fill: "#2938bc" //color for the clicked country
            // },
            selectedHover: {}
         }}
         regionsSelectable={false}
         series={{
            regions: [
               {
                  values: mapData, //this is your data
                  scale: ["#FFFFFF", "#FE2E2E"], //your color game's here
                  normalizeFunction: "polynomial"
               }
            ]
         }}
      />

   );
};

export default Map;