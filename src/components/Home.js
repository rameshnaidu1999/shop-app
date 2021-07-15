import React from "react";
import { Carousel } from "react-bootstrap";
import Laptop from "./assets/Laptops.jpg";
import Phone from "./assets/phone.jpg";
import Television from "./assets/Television.jpg";
import Products from "./Products";

function Home() {
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
          <div className="col-lg-4 col-md-10 ">
            <Products
              id="4"
              title="Samsung Telephone"
              price={9499}
              image="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              desc="This is a media card. You cection to describe"
            />
          </div>
          <div className="col-lg-4 col-md-10 ">
            <Products
              id="5"
              title="MacBook Air Pro"
              price={149499}
              image="https://images.pexels.com/photos/221011/pexels-photo-221011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              desc="This is a media card. You cection to describe"
            />{" "}
          </div>
          <div className="col-lg-4 col-md-10 ">
            <Products
              id="6"
              title="Samsung Telephone"
              price={39499}
              image="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              desc="This is a media card. You cection to describe"
            />{" "}
          </div>
          <div className="col-lg-4 col-md-10 ">
            <Products
              id="7"
              title="TV ( 43 Inch )"
              price={49499}
              image="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              desc="This is a media card. You cection to describe"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
