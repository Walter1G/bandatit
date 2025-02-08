import { useEffect, useState } from "react";
import Testimony from "./Testimony";
import "./Testimonials.css"
const Testimonials = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchTestimonials() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8000/testimonials", {
          signal,
        });
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();

    return () => abortController.abort();
  }, []);

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-items">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data.map((testimony) => {
          return <Testimony key={testimony.id} testimony={testimony} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
