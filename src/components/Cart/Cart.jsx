import { Link } from "react-router-dom";
import "./Cart.css";

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
    <div className="cart-container">
      <Link to="/">
        <button className="back-button">
          <span>←</span>
        </button>
      </Link>
      <div className="container-title">
        <h2 className="title-Cart">Shooping Cart</h2>
        <h3 className="subtitle-Cart">Shop</h3>
      </div>
      {carrito.length === 0 ? (
        <div className="empty-cart">
          <p>Carrito vacío</p>
          <Link to="/">
            <button className="back-to-shop-btn">Volver a compras</button>
          </Link>
        </div>
      ) : (
        <>
          {carrito.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <p className="product-title">{product.title}</p>
                <p className="product-price">
                  Precio por unidad: ${product.price}
                </p>
                <p className="product-quantity">Cantidad: {product.quantity}</p>
                <p className="product-total">
                  Total por producto: ${product.price * product.quantity}
                </p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(product.id)}
              >
                X
              </button>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${calculateTotalPrice().toFixed(3).replace(/\.?0+$/, '')}</p>
            <button className="clear-cart-btn" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <button className="checkout-btn">Comprar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
