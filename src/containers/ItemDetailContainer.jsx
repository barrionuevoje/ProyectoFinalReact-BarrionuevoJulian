import { useState, useEffect } from "react";  
import { useParams } from "react-router-dom";  
import { Container, Spinner } from "react-bootstrap";  
import { getFirestore, doc, getDoc } from "firebase/firestore";  
import { useCart } from "../context/CartContext";  
import ItemDetail from "../components/ItemDetail";
import "../components/css/ItemDetailContainer.css"; 

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

  const handleAddToCart = (cantidad) => {
    addToCart(producto, cantidad);
    setAddedToCart(true);
  };

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

  return (
    <Container className="text-center mt-4 item-detail-container">
      <ItemDetail producto={producto} onAddToCart={handleAddToCart} addedToCart={addedToCart} />
    </Container>
  );
};

export default ItemDetailContainer;
