import Banner from "../components/banner/Banner";
import Offers from "../components/offers/Offers";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <main className="page main">
      <Banner />
      <Offers />
     
      <section className="listings flex">
        <h2>Popular Listings</h2>
        <div className="listings">
          <div className="listing">
            <img src="" alt="" />
            <p>Listing Name</p>
            <p>Price</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>Testimonial</p>
            <p>Author</p>
          </div>
        </div>
          </section>
          <Footer />
    </main>
  );
};

export default MainLayout;
