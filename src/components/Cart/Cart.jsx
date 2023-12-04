import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ carrito, setCarrito }) => {
  const removeFromCart = (productId) => {
    const updatedCart = carrito.filter((product) => product.id !== productId);
    setCarrito(updatedCart);
  };

  const clearCart = () => {
    setCarrito([]);
  };

  const calculateTotalPrice = () => {
    return carrito.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <div>
          <p>Carrito vacío</p>
          <Link to="/">
            <button>Volver a compras</button>
          </Link>
        </div>
      ) : (
        <>
          {carrito.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>Precio por unidad: ${product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              <p>Total por producto: ${product.price * product.quantity}</p>
              <button onClick={() => removeFromCart(product.id)}>
                Eliminar
              </button>
            </div>
          ))}
          <div>
            <p>Total: ${calculateTotalPrice()}</p>
            <button onClick={clearCart}>Vaciar Carrito</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
