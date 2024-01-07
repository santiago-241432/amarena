import CartWidget from "./CartWidget";
import list from "./images/list.png";
import logo from "./images/LOGO AMARENA.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () =>{

  const [menuChecked, setMenuChecked] = useState(false);

  const handleNavLinkClick = () => {
    setMenuChecked(false);
  };

    return(
      <div id="header">
        <div className="encabezado"> 
          <CartWidget/>
          <NavLink className="amarena" to={"/"}><img className="logo" src={logo} alt={"logo"}/></NavLink>
              
              <nav className="nav">

              
              <label htmlFor="menu">
                <img src={list} className="img" alt={"lista"}/> 
              </label>
              <input type="checkbox" id="menu" checked={menuChecked} onChange={() => setMenuChecked(!menuChecked)}/>
              

              <div className="lista">
                <NavLink className="items" to={"/category/FRUTOS-SECOS"} onClick={handleNavLinkClick} >FRUTOS SECOS</NavLink>    
                <NavLink className="items" to={"/category/CEREALES"} onClick={handleNavLinkClick}>CEREALES</NavLink>
                <NavLink className="items" to={"/category/CHOCOLATES-Y-GARRAPIÑADAS"} onClick={handleNavLinkClick}>CHOCOLATES Y GARRAPIÑADAS</NavLink>
               
              </div> 
              
            </nav>
        </div>
        
        
      </div>
    );
};

export default NavBar;