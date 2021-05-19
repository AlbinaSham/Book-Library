import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";





function Header() {
  return (
      <header className = "ui container">
           <div className = "ui two item menu">
         <Link  to = "/" className="active item">
            Home
         </Link>
         <Link to = "/wishlist" className="item">
            Wish List
         </Link>
       
       
          
        
           
            </div> 
      </header>
   
   );
}

export default Header;
