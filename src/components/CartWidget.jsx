import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../components/css/ItemDetailContainer.css"

const CartWidget = () => {
  const { cartCount } = useCart(); // Accedemos al cartCount del contexto

  return (
    <Link to="/cart" style={{ display: "flex", alignItems: "center", color: "white", textDecoration: "none" }}>
      <FaShoppingCart size={20} />
      <span style={{ marginLeft: "5px" }}>{cartCount > 0 ? cartCount : 0}</span> {/* Si no hay productos, mostramos 0 */}
    </Link>
  );
};



export default CartWidget;
