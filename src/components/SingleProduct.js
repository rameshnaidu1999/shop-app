import React from "react";
import data from "./JSON/db";
import { Card } from "react-bootstrap";
import { Button } from "shards-react";

function SingleProduct() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <img class="img-fluid" src="http://placehold.it/750x500" alt="" />
        </div>

        <div class="col-md-4">
          <h3 class="my-3">Project Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
            adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,
            justo eu convallis placerat, felis enim.
          </p>
          <h5 class="my-3">Project Details</h5>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
          <Button block squared theme="success">
            Order Now
          </Button>
        </div>
      </div>

      <div class="card text-white bg-secondary my-5 text-center">
        <div class="card-body">
          <p class="text-white m-0">Relative Products</p>
        </div>
      </div>

      <div class="row">
        {data.map((product) => (
          <div className="col-lg-4 col-md-10 ">
            <div className="product  my-1">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "14rem" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.desc}</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link className="d-inline-block">
                    <Button squared theme="outline-danger">
                      Save
                    </Button>
                  </Card.Link>
                  <Card.Link>
                    <Button squared className="buy-btn" theme="success">
                      Order Now
                    </Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleProduct;
