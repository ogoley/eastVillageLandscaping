import React from "react";
import { Carousel, Button, Image } from "react-bootstrap";

export default function ImgCarousel() {
  return (
    <Carousel data-ride="carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={require("../../images/scene.jpg")} alt="First slide" />
        <Carousel.Caption className="mx-auto">
          <p>PROVEN TRACK RECORD</p>
          <h3>
            We've been serving the Hamden County for over 20 years; our reputation is well known. We've been helping our
            community take care of thier landscaping and maintenence needs for generations now.
          </h3>
          <Button className="mt-2">
            About Us
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={require("../../images/yard2.jpg")} alt="Third slide" />
        <Carousel.Caption className="mx-auto">
          <p>SERVICE ALL YEAR LONG</p>
          <h3>
            We're here to help throughout all 4 seasons. Whether it's time for spring/fall clean up, summer maintenence or winter snow
            removal — we've got you covered.
          </h3>
          <Button className="mt-2">
            Our Services
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={require("../../images/plants.jpg")} alt="First slide"/>
        <Carousel.Caption className="mx-auto">
          <p>PROVEN TRACK RECORD</p>
          <h3>
            We've been serving the Hamden County for over 20 years; our reputation is well known. We've been helping our
            community take care of thier landscaping and maintenence needs for generations now.
          </h3>
          <Button className="mt-2">
            About Us
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
