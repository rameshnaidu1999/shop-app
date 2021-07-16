import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "shards-react";
import { useStateValue } from "../StateProvider";

function Products({ id, image, title, desc, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="products">
      <div className="container">
        {/* best reviewed Products */}

        <div className="product my-1">
          <div class="card mb-2 mt-5" key={id}>
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
                  <p class="card-text">
                    {desc.length > 100 ? desc.substring(0, 99) : desc}...
                  </p>
                  <Button squared theme="danger" onClick={addToBasket}>
                    Add to Cart
                  </Button>
                  {"   "}
                  <Link to={`/products/${id}`}>
                    <Button squared theme="success">
                      Buy now
                    </Button>
                  </Link>

                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
