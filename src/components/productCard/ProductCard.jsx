import "./ProductCard.css";

const Offer = ({ product }) => {
  return (
    <div className="card offer" key={product.id}>
      <div className="prod-img">
        <img src={product.imageurl} alt={product.title} />
      </div>
      <p className="title">{product.title}</p>
      <div className="price">
        Was
        <span className="was"> ${product.price}</span>
        Now
      <span className="now">${(Number(product.price) * 0.6).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Offer;
