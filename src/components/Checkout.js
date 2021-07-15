import React from "react";
import { Button } from "shards-react";
import { useStateValue } from "../StateProvider";

function Checkout({ id, title, image, price, desc }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(id, title, image, price, desc);
  const removefromBasket = () => {
    // remove from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="container">
      <div class="card mb-2 mt-5">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img
              src={image}
              style={{ height: "16rem" }}
              class="card-img sqaured"
              alt=""
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h4 class="card-title">{title}</h4>
              <h6 class="text-muted">
                {" "}
                <span>Rs.</span> {price}
              </h6>
              <p class="card-text">{desc}</p>
              <Button squared theme="danger" onClick={removefromBasket}>
                Remove from Cart
              </Button>

              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
