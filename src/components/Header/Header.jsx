import React, { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import "../Header/Header.css";

function Header({ carrito, setCarrito, handleSearch }) {
  const [productTitle, setProductTitle] = useState("");

  const totalProductosEnCarrito = carrito
    ? carrito.reduce((total, product) => total + product.quantity, 0)
    : 0;

  const handleInputChange = (e) => {
    setProductTitle(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(productTitle);
    }
  };

  return (
    <nav className="Navbar">
      <div className="content-Logo">
        <Link to="/">
          <img src={Logo} alt="Logo" className="Logo" />
        </Link>
      </div>
      <div className="content-input-search">
        <div className="input-group">
          <input
            type="text"
            name="src"
            className="placeholder-Header"
            placeholder="Escribe el nombre del producto"
            value={productTitle}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button
            // className="btn btn-outline-secondary"
            type="button"
            onClick={() => handleSearch(productTitle)}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div className="content-svg-carrito">
        <Link to="/cart" className="carrito-enlace">
          <i className="bi bi-cart3"></i>
          <span className="cart-counter">{totalProductosEnCarrito}</span>
        </Link>
      </div>
      <div className="content-button-login">
        <Link to="/login" className="login-link">
          <button className="login-button">Iniciar Sección</button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
