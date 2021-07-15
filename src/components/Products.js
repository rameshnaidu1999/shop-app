import React from "react";
import { Card } from "react-bootstrap";
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
      <div className="container-sm">
        {/* best reviewed Products */}

        <div className="product my-1">
          <Card key={id}>
            <Card.Img variant="top" src={image} style={{ height: "14rem" }} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Title className="text-muted">Rs. {price}</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link className="d-inline-block">
                <Button squared theme="outline-danger" onClick={addToBasket}>
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
    </div>
  );
}

export default Products;
