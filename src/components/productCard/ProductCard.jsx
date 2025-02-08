import "./ProductCard.css";
import { useCart } from "../../utilities/CartContext";

const Offer = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="card offer" key={product.id}>
      <div className="prod-img">
        <img src={product.imageurl} alt={product.title} />
      </div>
      <p className="title">{product.title} <span onClick={()=>addToCart(product)}>🛒 Buy</span></p>
      {product.onOffer && (
        <div className="price">
          Was
          <span className="was"> ${product.price}</span>
          Now
          <span className="now">
            ${(Number(product.price) * 0.6).toFixed(2)}
          </span>
        </div>
      )}

      {!product.onOffer && <p>{product.price}</p>}
    </div>
  );
};

export default Offer;
