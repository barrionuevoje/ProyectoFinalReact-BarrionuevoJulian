import PropTypes from "prop-types";
import { Card, Alert } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "../components/css/ItemDetailContainer.css"; 

const ItemDetail = ({ producto, onAddToCart, addedToCart }) => {
  return (
    <Card className="shadow-lg text-center">
      <Card.Img variant="top" src={producto.imagen} className="item-detail-image" />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>Precio: ${producto.precio}</Card.Text>
        {producto.stock > 0 ? (
          !addedToCart ? (
            <ItemCount stock={producto.stock} initial={1} onAdd={onAddToCart} />
          ) : (
            <Alert variant="success" className="mt-2">¡Producto agregado al carrito!</Alert>
          )
        ) : (
          <Alert variant="danger" className="mt-2">Producto sin stock</Alert>
        )}
      </Card.Body>
    </Card>
  );
};

ItemDetail.propTypes = {
  producto: PropTypes.shape({
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    precio: PropTypes.number,
    stock: PropTypes.number,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  addedToCart: PropTypes.bool.isRequired,
};

export default ItemDetail;
