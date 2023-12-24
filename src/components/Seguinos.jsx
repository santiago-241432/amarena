import logo from "./images/LOGO AMARENA.png";
import ig from "./images/instagram.png"
import {Link} from "react-router-dom";

const Seguinos = () =>{
return(
    <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center" >
                    <div><img className="logos" src={logo} alt={"logo"}/><img src={ig} alt={"ig"} className="logos" /><h3>SEGUINOS EN INSTAGRAM</h3></div>
                    <p>ENTERATE DE TODAS LAS PROMOCIONES, NOVEDADES Y MAS...</p>
                    <Link to={"/"} type="button" className="btn m-3 btn-outline-dark">IR AL PERFIL</Link>
                </div>
            </div>
        </div>
)
};

export default Seguinos;