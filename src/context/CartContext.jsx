import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';  // Importar PropTypes

// Definir el contexto
const CartContext = createContext();

// El proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (producto, cantidad) => {
    setCartItems((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === producto.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + cantidad }
            : item
        );
      } else {
        return [...prevCart, { ...producto, quantity: cantidad }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Agregar validación para children
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,  // children debe ser un nodo (elemento React)
};

// Hook para acceder al contexto
export const useCart = () => useContext(CartContext);