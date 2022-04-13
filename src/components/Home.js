import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import "./Home.css";

import ProductFeed from "./ProductFeed";

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      setProduct(data);
    }
    fetchData();
  }, []);
  console.log(product);

  return (
    <main className="home">
      <Banner />

      <ProductFeed products={product} />
    </main>
  );
}

export default Home;
