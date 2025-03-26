import { useState } from "react";
import { Button, InputGroup, FormControl, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial > stock ? stock : initial);
  const [added, setAdded] = useState(false);

  const increase = () => stock > 0 && setCount((prev) => Math.min(prev + 1, stock));
  const decrease = () => setCount((prev) => Math.max(prev - 1, 1));

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <div className="text-center mt-3">
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" onClick={decrease} disabled={count <= 1}>
          -
        </Button>
        <FormControl className="text-center" value={count} readOnly />
        <Button variant="outline-secondary" onClick={increase} disabled={count >= stock}>
          +
        </Button>
      </InputGroup>
      <Button variant="primary" onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito
      </Button>
      {added && <Alert variant="success" className="mt-2">Producto agregado!</Alert>}
    </div>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number,
  onAdd: PropTypes.func.isRequired,
};

export default ItemCount;