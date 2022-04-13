import React, { useState } from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import Currency from "react-currency-formatter";
import { useStateValue } from "./StateProvider";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [{ cart }, dispatch] = useStateValue();

  console.log("i have this item >>>", cart);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: id,
        title: title,
        price: price,
        description: description,
        image: image,
        rating: rating,
        category: category,
      },
    });
  };

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="product">
      <p className="product__category">{category}</p>

      <div className="product__imageContainer">
        <img src={image} alt="" className="product__image" />
      </div>

      <h4 className="product__title">{title}</h4>

      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="product__icon" />
          ))}
      </div>

      <p className="product__description">{description}</p>

      <div className="product__price">
        <Currency quantity={price} currency="INR" />
      </div>

      {hasPrime && (
        <div className="product__hasprime">
          <img
            className="product__hasprimeImg"
            src="https://links.papareact.com/fdw"
            alt=""
          />
          <p className="product__hasprimeDelivery">Free Next-Day Delivery</p>
        </div>
      )}

      <button onClick={addToCart} className="product__button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
