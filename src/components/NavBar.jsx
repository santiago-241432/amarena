import CartWidget from "./CartWidget";
import list from "./images/list.png";
import logo from "./images/LOGO AMARENA.png";
import { NavLink } from "react-router-dom";

const NavBar = () =>{
    return(
      <div id="header">
        <div className="encabezado"> 
          <NavLink className="amarena" to={"/"}><img className="logo" src={logo} alt={"logo"}/></NavLink>
            <nav className="nav">

              
              <label htmlFor="menu">
                <img src={list} className="img" alt={"lista"}/> 
              </label>
              <input type="checkbox" id="menu"/>
              

              <div className="lista">
                <NavLink className="items" activeClassName={"active"} to={"/category/FRUTOS-SECOS"} >FRUTOS SECOS</NavLink>    
                <NavLink className="items" activeClassName={"active"} to={"/category/CEREALES"}>CEREALES</NavLink>
                <NavLink className="items" activeClassName={"active"} to={"/category/CHOCOLATES-Y-GARRAPIÑADAS"}>CHOCOLATES Y GARRAPIÑADAS</NavLink>
              <div >
                <CartWidget />
              </div>   
              </div> 
              
            </nav>
        </div>
        
        
      </div>
    );
};

export default NavBar;