import { useState, useEffect } from "react";  
import { useParams } from "react-router-dom";  
import { Container, Card, Alert, Spinner } from "react-bootstrap";  
import ItemCount from "./ItemCount";  
import { getFirestore, doc, getDoc } from "firebase/firestore";  
import { useCart } from "./CartContext";  
import "../components/css/ItemDetailContainer.css"; // Asegúrate de importar el CSS si no lo has hecho

const ItemDetailContainer = () => {  
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();
  const db = getFirestore();

  useEffect(() => {
    setLoading(true);
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error al obtener el producto: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [itemId, db]);

  if (loading) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  if (!producto) {
    return <p className="text-center">No se encontró el producto.</p>;
  }

  const handleAddToCart = (cantidad) => {
    addToCart(producto, cantidad);
    setAddedToCart(true);
  };

  return (
    <Container className="text-center mt-4 item-detail-container">
      <Card className="shadow-lg">
        <Card.Img variant="top" src={producto.imagen} className="item-detail-image" />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>Precio: ${producto.precio}</Card.Text>
          {producto.stock > 0 ? (
            !addedToCart ? (
              <ItemCount stock={producto.stock} initial={1} onAdd={handleAddToCart} />
            ) : (
              <Alert variant="success" className="mt-2">¡Producto agregado al carrito!</Alert>
            )
          ) : (
            <Alert variant="danger" className="mt-2">Producto sin stock</Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetailContainer;
