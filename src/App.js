// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import axios from "axios";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Nuevo estado

  useEffect(() => {
    // Cargar la lista completa de productos al inicio
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Inicializar con todos los productos
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    // Realizar la lógica de filtrado de productos
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Actualizar el estado de productos filtrados en Home
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <div className="App">
        <Header carrito={carrito} handleSearch={handleSearch} />
        <Routes>
          <Route
            path="/cart"
            element={<Cart carrito={carrito} setCarrito={setCarrito} />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Home
                  setCarrito={setCarrito}
                  carrito={carrito}
                  filteredProducts={filteredProducts}
                />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
