import Banner from "../components/banner/Banner";
import Offers from "../components/offers/Offers";
import Footer from "../components/Footer/Footer";
import Latest from "../components/Latest/Latest";
import Testimonials from "../components/Testimonial/Testimonials";

const MainLayout = () => {
  return (
    <main className="page main">
      <Banner />
      <Offers />
      <Latest />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default MainLayout;
