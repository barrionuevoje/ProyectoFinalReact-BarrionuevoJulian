import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Spinner, Alert } from "react-bootstrap";
import ItemList from "./ItemList";
import { getItems } from "../firebase";

const ItemListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getItems()
      .then((productos) => {
        const filtrados = categoryId
          ? productos.filter((prod) => prod.categoria === categoryId)
          : productos;

        setProductosFiltrados(filtrados);
      })
      .catch((error) => console.error("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <Container className="text-center mt-4">
      <h2 className="fw-bold">{mensaje}</h2>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      ) : productosFiltrados.length > 0 ? (
        <ItemList productos={productosFiltrados} />
      ) : (
        <Alert variant="warning">No hay productos disponibles en esta categoría.</Alert>
      )}
    </Container>
  );
};

ItemListContainer.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default ItemListContainer;
