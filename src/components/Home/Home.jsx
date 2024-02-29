// Home.jsx
import React, { useEffect, useState } from "react";
import Pages from "../Pages/Pages.jsx";
import axios from "axios";
import { BiCart, BiHeart } from "react-icons/bi"; // Importar íconos de React
import "./Home.css";

const Home = ({ carrito, setCarrito, filteredProducts }) => {
  const [products, setProducts] = useState([]);
  const [productsPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = filteredProducts.length || products.length;
  const lastPage = currentPage * productsPage;
  const firstPage = lastPage - productsPage;

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {});
  }, []);

  const addToCart = (product) => {
    const existingProduct = carrito.find((p) => p.id === product.id);

    if (existingProduct) {
      const updatedCart = carrito.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCarrito(updatedCart);
    } else {
      setCarrito([...carrito, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <div>
        <div className="content-products">
          {(filteredProducts.length ? filteredProducts : products)
            .slice(firstPage, lastPage)
            .map((row, i) => {
              return (
                <div className="card-product" key={i}>
                  <div className="content-img">
                    {/* Ajustar src a la propiedad correcta */}
                    <img src={row.img} alt={row.name} />
                  </div>
                  <div className="content-buttons">
                    <div className="content-buttons-animations">
                      {/* Botón de Añadir con ícono de carrito */}
                      <button
                        className="Add-Cart"
                        onClick={() => addToCart(row)}
                      >
                        <BiCart className="icon-cart"/>
                      </button>
                      {/* Botón de Me gusta con ícono de corazón */}
                      <button
                        className="like-button"
                        onClick={() => {
                          // Puedes agregar la lógica necesaria aquí
                          console.log("Me gusta clickeado");
                        }}
                      >
                        <BiHeart className="icon-heart "/>
                      </button>
                    </div>
                  </div>
                  <div className="info-product">
                    {/* Ajustar las propiedades a los nombres correctos */}
                    <p className="p">{row.category}</p>
                    <h2>{row.name.substring(0, 20)}</h2>
                    <h3>Precio: ${row.price}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Pages
        productsPage={productsPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </>
  );
};

export default Home;
