import "./Latest.css";
import {useState,useEffect} from 'react'
const Latest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchOffers() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8000/products", { signal });
        if (!res.ok) throw new Error("Failed to fetch offers");
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

    fetchOffers();

    return () => abortController.abort(); // Cleanup function
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className="current-offers">
      <h2>Hot🔥🔥🔥 Offers</h2>
      <div className="offers">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data
          .filter((offer) => offer.onOffer == true)
          .map((offer) => (
            <ProductCard key={offer.id} product={offer} />
          ))}
      </div>
    </section>
  );
};

export default Latest;
