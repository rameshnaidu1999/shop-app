import React, { useState, useEffect } from "react";
// import data from "./JSON/db";
import { Card } from "react-bootstrap";
import { Button } from "shards-react";
import Axios from "axios";
import { useStateValue } from "../StateProvider";
import RelativeItems from "./RelativeItems";
import { Link, useParams } from "react-router-dom";
import { Description } from "@material-ui/icons";

function SingleProduct({ match }) {
  const [{ basket }, dispatch] = useStateValue();
  const { id } = useParams();

  const [productdetails, setProductDetails] = useState([]);
  const API_BASE_URL = `https://fakestoreapi.com/products`;
  const fetchBook = async () => {
    try {
      const result = await Axios.get(`${API_BASE_URL}/${id}`);
      setProductDetails(result.data);
      console.log(result.data);
    } catch (error) {}
  };
  useEffect(() => {
    // Call the API
    fetchBook();
  }, [id]);
  const { price, title, description, image } = productdetails;
  return (
    <div class="container">
      <div class="row">
        <div class="col-8">
          <img
            class="img-fluid"
            src={image}
            alt=""
            style={{ height: "30rem", width: "38rem" }}
          />
        </div>
        <div class="col-4">
          <h3 class="my-3">{title}</h3>
          <p>{description}</p>
          <h5 class="my-3">Project Details</h5>
          <ul>
            <li> $ {price}</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
          <Button block squared theme="success">
            Order Now
          </Button>
        </div>
      </div>

      <RelativeItems />
    </div>
  );
}

export default SingleProduct;
