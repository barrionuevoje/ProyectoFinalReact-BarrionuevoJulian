import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartCount } = useCart();

  return (
    <Link to="/cart" style={{ display: "flex", alignItems: "center", color: "white", textDecoration: "none" }}>
      <FaShoppingCart size={20} />
      <span style={{ marginLeft: "5px" }}>{cartCount}</span>
    </Link>
  );
};

export default CartWidget;
