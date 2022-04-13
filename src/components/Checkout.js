import React from "react";
import "./Checkout.css";
import Currency from "react-currency-formatter";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "../reducer";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <main>
        {/* Left */}
        <div className="checkout__left">
          <img
            className="checkout__img"
            src="https://links.papareact.com/ikj"
            alt=""
          />

          <div className="checkout__product">
            <h3>Hello , {user?.email}</h3>
            <p>
              {cart.length === 0
                ? "Your Amazon Cart is Empty"
                : "Shopping Cart"}
            </p>

            {cart.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="checkout__right">
          <p>
            Subtotal ({cart?.length} items):{" "}
            <strong>
              <Currency quantity={getCartTotal(cart)} currency="INR" />
            </strong>
          </p>
          <button>Proceed to Checkout</button>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
