import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link, Navigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () =>{

    const[nombre, setNombre] = useState("");
    const[email, setEmail] = useState("");
    const[telefono, setTelefono] = useState("");
    const[orderID, setOrderID] = useState("");
    const {Cart, cartTotal, removeItem, clear, cartSumaTotal} = useContext(CartContext);
    const [errorMessageNombre, setErrorMessageNombre] = useState('');
    const [errorMessageMail, setErrorMessageMail] = useState('');
    const [errorMessageTelefono, setErrorMessageTelefono] = useState('');



    

    const generarOrden =() =>{
        const buyer = {name:nombre, email:email, telefono:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const order = { buyer:buyer, items:Cart, date:date, total:cartSumaTotal()};

        
            if(nombre.length === 0){
                setErrorMessageNombre("Por favor, completa el campo de nombre");
                return false;
            }

            if(email.length === 0){
                setErrorMessageMail("Por favor, completa el campo de email");
                return false;
            }

            if(telefono.length === 0){
                setErrorMessageTelefono("Por favor, completa el campo de telefono"); 
                return false;
            }

            
            
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data =>{
            setOrderID(data.id);
            //clear();
         })
    };

    

    if(cartTotal() === 0){
        return(
            <div className="container my-5">
                <div className="row">
                    
                    <div className="col-md-12 alert text-center alert-secondary" role="alert">
                        <h1>NO SE AGREGARON PRODUCTOS AL CARRITO</h1>
                        <Link to={"/"} type="button" className="btn m-3 btn-outline-dark">VOLVER AL MENÚ PRINCIPAL</Link>
                    </div>
                </div>
            </div>
        )
    }
    

    return(
        <div className="container my-5">
            <div className="row">
                
                <div className="col-md-12 text-center ">

                    <table className="table ">

                        {
                            Cart.map(item=>(
                            <tr className="bg-white" key={item.index}>
                                <td><img src={item.imagen} alt={item.nombre} width={200} className="imagen-carrito"  /><div>{item.nombre}</div></td>
                                <td><div>{item.quantity} Gramos</div><div>${item.precio * item.quantity }</div></td>
                                <td><Link onClick={() => {removeItem(item.index)}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                                <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8z"/>
                                </svg></Link></td>
                            </tr>))
                        }

                            <tr className="border-0">
                                <td><button className="m-3">TOTAL</button></td>
                                <td>${cartSumaTotal()}</td>
                                <td><button className="btn m-3 btn-outline-dark"onClick={() =>{clear()}}>VACIAR CARRITO</button></td>
                                <td></td>
                                <td></td>
                            </tr>
                    </table>

                    <Link to={"/"} type="button" className="btn m-3 btn-outline-dark btn-light">VOLVER AL MENÚ PRINCIPAL</Link>
                    
                    <div className="col-md-4 bg-white border border-black">    
                    
                        <h1>COMPLETAR ORDEN</h1>    
                      
                        <h2>DEBE COMPLETAR TODOS LOS CAMPOS</h2>

                        <h3>SOLO ENVIOS A DOMICILIO</h3>
                        
                        <p>NOS COMUNICAREMOS VIA WHATSAPP PARA COORDINAR EL ENVIO, LOS DIAS HÁBILES DE 8 a 20 HS</p>
                    
                        <form id="formulario">
                        <div className="mb-3 ">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                                {errorMessageNombre && <p style={{ color: 'red' }}>{errorMessageNombre}</p>}    
                            </div>
            
                            <div class="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email"onInput={(e) => {setEmail(e.target.value)}}/>
                                {errorMessageMail && <p style={{ color: 'red' }}>{errorMessageMail}</p>} 
                            </div>
                            
                            <div class="mb-3">
                                <label htmlFor="telefono" className="form-label">Telefono</label>
                                <input type="text" className="form-control" id="telefono"onInput={(e) => {setTelefono(e.target.value)}}/>
                                {errorMessageTelefono && <p style={{ color: 'red' }}>{errorMessageTelefono}</p>} 
                            </div>
                            
                            
                            <button type="button" className="btn m-3 btn-outline-dark" onClick={generarOrden}>Generar Orden</button>
                        </form>

                        

                    </div> 
                    
                </div>
                
            </div>
 
           { orderID ?  <Navigate to={"/thankyou/"+ orderID}  /> :  ""}
            
        </div>
    );
};

export default Cart;