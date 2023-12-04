// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header carrito={carrito} />
        <Routes>
          <Route
            path="/cart"
            element={<Cart carrito={carrito} setCarrito={setCarrito} />}
          />
          <Route
            path="/"
            element={<Home setCarrito={setCarrito} carrito={carrito} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
