import "./Testimony.css"
const Testimony = ({ testimony }) => {
  return (
    <div className="testimonial">
      <p><span>Author: </span>{testimony.user}</p>
      <p>{testimony.comment}</p>
      <p><span>Rating:  </span>{"⭐".repeat(Number(testimony.rating))}</p>
    </div>
  );
};

export default Testimony;
