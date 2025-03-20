import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "./ItemCard";

const ItemList = ({ productos }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ItemCard {...producto} />
            </Col>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </Row>
    </Container>
  );
};

ItemList.propTypes = {
  productos: PropTypes.array.isRequired,
};

export default ItemList;
