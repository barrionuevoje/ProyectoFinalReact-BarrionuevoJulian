import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useCart } from "../context/CartContext"; // Importa el contexto

const categorias = ["electronica", "hogar", "ropa"];

const NavBar = () => {
  const { cartItems } = useCart(); // Obtiene los productos del carrito

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Suma la cantidad de productos

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="w-100">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            {categorias.map((categoria) => (
              <Nav.Link key={categoria} as={Link} to={`/category/${categoria}`}>
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </Nav.Link>
            ))}
            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
          </Nav>
          <CartWidget cartCount={cartCount} /> {/* Pasa el conteo al CartWidget */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
