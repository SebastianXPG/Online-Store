// Home.jsx
import React, { useEffect, useState } from "react";
import Pages from "../Pages/Pages.jsx";
import "../Home/Home.css";

const Home = ({ setCarrito, carrito }) => {
  const [products, setProducts] = useState([]);
  const [productsPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = products.length;
  const lastPage = currentPage * productsPage;
  const firstPage = lastPage - productsPage;

  const productList = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    setProducts(products);
  };

  useEffect(() => {
    productList();
  }, []);

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingProduct = carrito.find((p) => p.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      const updatedCart = carrito.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCarrito(updatedCart);
    } else {
      // Si el producto no está en el carrito, agregarlo
      setCarrito([...carrito, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <div className="container-products">
        {products
          .map((product) => (
            <div className="card-product" key={product.id}>
              <figure className="container-img">
                <img src={product.image} alt={product.title} />
              </figure>
              <div className="info-product">
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
                <p className="price">{product.category}</p>
                <button onClick={() => addToCart(product)}>
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))
          .slice(firstPage, lastPage)}
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
