import React from "react";
import { Button, Carousel } from "react-bootstrap";

import carouselimg from "../assets/images/carousel_slide_1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const slides = [
    {
      image: carouselimg,
      heading: "Check out our collection!",
      buttonText: "View All",
    },
    {
      image: carouselimg,
      heading: "Check out our collection!",
      buttonText: "Explore",
    },
  ];

  return (
    <Carousel data-bs-theme="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={slide.image} alt="First slide" />
          <Carousel.Caption className="p-5">
            <h1 className="display-1 text-white pb-5">{slide.heading}</h1>
            <Button variant="outline-light" className="rounded-0 py-3 px-5">
              {slide.buttonText}
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;
