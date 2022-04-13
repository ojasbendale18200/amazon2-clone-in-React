import React from "react";
import Product from "./Product";
import "./ProductFeed.css";

function ProductFeed({ products }) {
  return (
    <div className="productFeed">
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
