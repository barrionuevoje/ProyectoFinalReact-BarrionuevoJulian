import { Button, ListGroup, Alert } from "react-bootstrap";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useCart();

  return (
    <div className="mt-4">
      <h2>Carrito de compras</h2>
      {cartItems.length > 0 ? (
        <>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                {item.nombre} - ${item.precio} x {item.quantity}
                <Button variant="danger" onClick={() => removeFromCart(item.id)} className="ms-2">
                  Eliminar
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4 className="mt-3">Total: ${totalPrice}</h4>
          <Button variant="warning" onClick={clearCart} className="mt-2">
            Vaciar Carrito
          </Button>
        </>
      ) : (
        <Alert variant="info">No hay productos en el carrito.</Alert>
      )}
    </div>
  );
};

export default Cart;
