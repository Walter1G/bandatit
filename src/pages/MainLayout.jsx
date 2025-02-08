import Banner from "../components/banner/Banner";
import Offers from "../components/offers/Offers";
import Footer from "../components/Footer/Footer";
import Latest from "../components/Latest/Latest";

const MainLayout = () => {
  return (
    <main className="page main">
      <Banner />
      <Offers />
     <Latest />
      
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
