import { useEffect, useState } from "react";
import Pages from "../Pages/Pages.jsx";
import axios from "axios";
import "./Home.css";

const Home = ({ carrito, setCarrito }) => {
  const [products, setProducts] = useState([]);
  const [productsPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [productTitle, setProductTitle] = useState("");
  const totalProducts = products.length; // Total de productos
  const lastPage = currentPage * productsPage; // Último índice de la página actual
  const firstPage = lastPage - productsPage; // Primer índice de la página actual

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {});
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
      <div>
        <div className="container-input">
          <h1>Buscar un producto</h1>
          <input
            type="text"
            name="src"
            className="placeholder-Header"
            placeholder="Escribe el nombre del producto"
            value={productTitle}
            onChange={(e) => {
              setProductTitle(e.target.value);
            }}
          />
        </div>
        <div className="container-products">
          {products
            .filter((row) =>
              productTitle === ""
                ? row
                : row.title.toLowerCase().includes(productTitle.toLowerCase())
            )
            .map((row, i) => {
              // Renderizar los productos filtrados y paginados
              return (
                <div className="card-product" key={i}>
                  <div className="container-img">
                    <img src={row.image} alt={row.title} />
                  </div>
                  <div className="info-product">
                    <h2>{row.title.substring(0, 20)}</h2>
                    <h3>Precio: ${row.price}</h3>
                    <button onClick={() => addToCart(row)}>Añadir</button>
                  </div>
                </div>
              );
            })
            .slice(firstPage, lastPage)}
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
