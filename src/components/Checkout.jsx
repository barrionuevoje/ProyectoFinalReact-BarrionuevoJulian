import { useState } from "react";
import { Button, Form, ListGroup, Alert, Spinner } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; // Importamos el contexto

const Checkout = () => {
  const { cartItems, clearCart } = useCart(); // Obtenemos cartItems y clearCart desde el contexto
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cartItems || cartItems.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    const order = {
      buyer: { name, address, email },
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0),
      date: new Date().toISOString(),
    };

    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      alert(`Compra realizada con éxito. ID de la orden: ${docRef.id}`);
      clearCart(); // Limpiamos el carrito usando el contexto
      navigate("/");
    } catch (error) {
      console.error("Error al procesar la compra", error);
      alert("Hubo un error al procesar la compra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <h2>Resumen de Compra</h2>
      {cartItems && cartItems.length > 0 ? (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              {item.nombre} - ${item.precio} x {item.quantity}
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <Alert variant="info">No hay productos en el carrito.</Alert>
      )}

      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Button type="submit" variant="success" className="mt-3" disabled={loading}>
          {loading ? <Spinner as="span" animation="border" size="sm" /> : "Confirmar compra"}
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
