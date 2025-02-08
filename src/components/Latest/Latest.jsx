import "./Latest.css";

import { useState, useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
const Latest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchLatest() {
      try {
        setLoading(true);
        const res = await fetch(
          "http://localhost:8000/products?_sort=date&_order=desc&_limit=6",
          { signal }
        );
        if (!res.ok) throw new Error("Failed to fetch Latest");
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

    fetchLatest();

    return () => abortController.abort();
  }, []);



  return (
    <section className="latest-items">
      <h2>New 📦📦 Arrivals </h2>
      <div className="items">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        {data.map((latest) => (
          <ProductCard key={latest.id} product={latest} />
        ))}
      </div>
    </section>
  );
};

export default Latest;
