import { useContext } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext";
import {Link} from "react-router-dom";
const ItemDetail = ({item}) =>{

    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) =>{
        addItem(item, quantity);
    };



    return(
        <div className="card text-center m-5 border border-black">
            <div className="m-4">
                <img src={item.imagen} className="imagen" alt={item.nombre}/>    
            </div>
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
                <p className="card-text">{item.preciox100gramos}</p>
                <ItemCount stock ={item.stock} onAdd={onAdd} />
                <Link to={"/"} type="button" className="btn m-3 btn-outline-dark">VOLVER AL MENU PRINCIPAL</Link>
            </div>
        </div>
    );
};

export default ItemDetail;