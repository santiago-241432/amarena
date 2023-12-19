import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="global">
          <NavBar/>
            <Routes>
              <Route path ={"/"} element={<ItemListContainer/>} />
              <Route path ={"/category/:id"} element={<ItemListContainer/>} />
              <Route path ={"/item/:id"} element={<ItemDetailContainer/>} />
              <Route path ={"/cart"} element={<Cart/>} />
              <Route path ={"/thankyou/:orderID"} element={<ThankYou/>} />
              <Route path ={"*"} element={<Error404/>} />
            </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );

}

export default App;
