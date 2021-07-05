import React from 'react';



const Footer = () => {
   const year = new Date().getFullYear();
   return (

      <footer className="footer">
             <span>PEN International © {year} Copyright</span>
       </footer>

   );
}

export default Footer