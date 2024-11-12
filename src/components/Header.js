import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

import "./Header.css";

export const Header = () => {
  const products = useSelector((state) => state.cartState.cartList);
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Smart Shop Logo" />
        <span>REDUX CART</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="link">
        <span>Cart: {products.length}</span>
      </Link>
    </header>
  );
};
