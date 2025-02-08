import "./Cart.css";
import { useCart } from "../utilities/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    getCartTotalItems,
    getCartTotalPrice,
    clearCart,
  } = useCart();

  return (
    <div className="card cart-card">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <img src={item.imageurl} alt={item.name} />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="btns">
        <p>Total Items: {getCartTotalItems()}</p>
        <p>Total Price: ${Number(getCartTotalPrice()).toFixed(2)}</p>
        <button onClick={() => clearCart()} className="checkout-button">
          clear Cart
        </button>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
