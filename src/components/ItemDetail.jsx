import PropTypes from "prop-types";
import { Container, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto, onAddToCart }) => {
  return (
    <Container className="text-center mt-4">
      <Card className="shadow-lg">
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>Precio: ${producto.precio}</Card.Text>
          <ItemCount stock={producto.stock} initial={1} onAdd={onAddToCart} />
        </Card.Body>
      </Card>
    </Container>
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
};

export default ItemDetail;
