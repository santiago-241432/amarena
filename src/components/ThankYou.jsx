import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const ThankYou = () => {

    const {clear} = useContext(CartContext);

    clear();

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 alert text-center alert-secondary" role="alert">
                    <div><h3>GRACIAS POR TU COMPRA</h3></div>
                    <Link to={"/"} type="button" className="btn m-3 btn-outline-dark">VOLVER AL MENU PRINCIPAL</Link>
                </div>
            </div>
        </div>
    );

};
export default ThankYou;