import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"; 
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje="Bienvenido a nuestra tienda" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer mensaje="Filtrando por categoría" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
  