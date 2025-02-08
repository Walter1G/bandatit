import banner from "../../assets/banner.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-img">
        <img src={banner} alt="banner image" />
      </div>
    </section>
  );
};

export default Banner;
