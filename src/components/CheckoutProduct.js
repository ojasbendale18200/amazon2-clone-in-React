import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import Currency from "react-currency-formatter";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  rating,
  category,
  image,
  hasPrime,
}) {
  const [{ cart }, dispatch] = useStateValue();

  const addItemtoCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      rating,
      category,
      image,
      hasPrime,
    };
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      {/* middle */}

      <div className="checkoutProduct__middle">
        <p>{title}</p>
        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="checkoutProduct__starIcon" />
            ))}
        </div>
        <p className="checkoutProduct__description">{description}</p>
        <Currency quantity={price} currency="INR" />
      </div>

      {/* Right Add/Remove button */}
      <div className="checkoutProdct__buttonContainer">
        <button className="checkoutProduct__button" onClick={addItemtoCart}>
          Add to Cart
        </button>
        <button className="checkoutProduct__button" onClick={removeFromCart}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
