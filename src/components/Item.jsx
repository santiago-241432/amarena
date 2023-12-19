import { Link } from "react-router-dom";

const Item = ({item}) =>{
    return(
        <Link to={"/item/" + item.id}>
        <div className="card m-2 border border-black">
            <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
            <div className="card-body text-center">
                <h5 className="card-title ">{item.nombre}</h5>
            </div>
        </div>
        </Link>
                );

};

export default Item;