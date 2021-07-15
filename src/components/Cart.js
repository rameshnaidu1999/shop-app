import React from "react";
import Checkout from "./Checkout";
import { useStateValue } from "../StateProvider";
import SubTotal from "./SubTotal";

function Cart() {
  const [{ basket }] = useStateValue();
  return (
    <div className="container">
      {basket?.length === 0 ? (
        <div>
          <h3 className="m-5">no items in your cart</h3>
        </div>
      ) : (
        <div className="m-3">
          {basket.length > 0 && (
            <div className=" card mb-2">
              <SubTotal />
            </div>
          )}
          {basket.map((item) => (
            <Checkout
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              desc={item.desc}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
