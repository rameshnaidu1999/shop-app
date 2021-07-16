import React, { useState, useEffect } from "react";
// import data from "./JSON/db";
import { Card } from "react-bootstrap";
import { Button } from "shards-react";
import Axios from "axios";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
function SingleProduct() {
  const [{ basket }, dispatch] = useStateValue();

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products?limit=5").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <div class="card text-white bg-secondary my-5 text-center">
        <div class="card-body">
          <p class="text-white m-0">Relative Products</p>
        </div>
      </div>

      <div class="row">
        {data.map((product) => (
          <div className="col-lg-4 col-md-10 ">
            <Link to={`/products/${product.id}`}>
              <div className="product  my-1">
                <Card>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: "14rem" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      {product.title.length > 100
                        ? product.title.substring(0, 5)
                        : product.title}
                      ...
                    </Card.Title>
                    <Card.Text>{product.description.length > 100}</Card.Text>
                    <Card.Text>$ {product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleProduct;
