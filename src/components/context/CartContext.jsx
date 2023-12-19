import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) =>{

    const [Cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.index)){

            let pos = Cart.findIndex(x => x.index === item);
            Cart[pos].quantity+=quantity;
            setCart([...Cart]);

        }else{
            setCart([...Cart,{...item,quantity:quantity}])
        }
    };

    const removeItem = (itemID) =>{

        const items = Cart.filter(item => item.index !== itemID);
        setCart([...items]);

    };

    const clear = () =>{

        setCart([]);

    };

    const isInCart = (itemID) =>{

        return Cart.some(item => item.index === itemID);

    };

    const cartTotal = () =>{
        return Cart.reduce((accum, item)=> accum += item.quantity, 0)
    }

    const cartSumaTotal = () =>{
        return Cart.reduce((accum, item)=> accum += item.quantity * item.precio , 0)
    }

    return(
        <CartContext.Provider value={{Cart , addItem, removeItem, clear, cartTotal, cartSumaTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;