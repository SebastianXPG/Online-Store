import React from "react";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import "../Header/Header.css";

function Header({ carrito }) {
  // console.log('[bolitacontador]' , carrito)
  const totalProductosEnCarrito = carrito
    ? carrito.reduce((total, product) => total + product.quantity, 0)
    : 0;

  return (
    <nav className="Navbar">
      <div className="content-Logo">
        <Link to="/">
          <img src={Logo} alt="Logo" className="Logo" />
        </Link>
      </div>
      <div className="content-input-header">
        <input
          type="text"
          placeholder="Search Product..."
          className="placeholder-Header"
        />
      </div>
      <div className="content-svg-carrito">
        <Link to="/cart" className="carrito-enlace">
          <i className="bi bi-cart3"></i>
          <span className="cart-counter">{totalProductosEnCarrito}</span>
        </Link>
      </div>
      <div className="content-button">
        <button>Iniciar Seccion</button>
      </div>
    </nav>
  );
}

export default Header;