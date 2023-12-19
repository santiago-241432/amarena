import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) =>{
    const [items, setItems] = useState(100)
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () =>{
        if(items < itemStock){
        setItems (items + 100)
        }
    }

    const decrementar = () =>{
        if(items > 100){
         setItems (items - 100)
        }
    }

    const addToCart = () => {
        if(itemStock >= items){
            setItemStock(itemStock - items);
            setItems(100);
            setItemAdded(true);
            onAdd(items);

        }
    }

    useEffect(()=>{
        setItemStock(stock);
    },[stock])


    return(

    

        <div className="container">
            <div className="row">
                <div className="col">
                    {itemAdded ? "":<div class="btn-group global" role="group" aria-label="Basic outlined example">
                        <button className="btn btn-outline-dark" onClick={decrementar}>-</button>
                        <button className="btn">{items} Gramos</button>
                        <button className="btn btn-outline-dark" onClick={incrementar}>+</button>
            
                    </div>}
                    

                </div>
            </div>
            <div className="row">
                <div className="col">
                    {itemAdded ? <Link to ={"/cart"} className="btn btn-outline-dark">TERMINAR MI COMPRA</Link>:
                    <button className="btn m-3 btn-outline-dark" onClick={addToCart}>Agregar al carrito</button>}

                </div>
            </div>
        </div>
    );

};

export default ItemCount;