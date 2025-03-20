import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ItemCard = ({ id, nombre, precio, imagen }) => {
  return (
    <Card className="h-100 shadow-sm">
      <div className="card-img-container">
        <Card.Img variant="top" src={imagen} className="card-img" />
      </div>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>${precio}</Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default ItemCard;
