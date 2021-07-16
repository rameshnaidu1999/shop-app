import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Laptop from "./assets/Laptops.jpg";
import Phone from "./assets/phone.jpg";
import Television from "./assets/Television.jpg";
import Products from "./Products";
import Axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="home">
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Laptop} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Television} alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Phone} alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container">
        <div class="card text-white bg-secondary my-5 text-center">
          <div class="card-body">
            <p class="text-white m-0">Relative Products</p>
          </div>
        </div>

        <div className="row">
          {data.map((item) => (
            <Products
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              desc={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
