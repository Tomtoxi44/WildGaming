import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-carousel-minimal";

function CarouselComponent(props) {
  const { data } = props;

  const captionStyle = {
    fontSize: "3.1rem",
    fontWeight: "bold",
    fontFamily: "roboto, sans-serif",
    color: "white",
    textShadow: "0 0 10px rgba(155, 258, 354, 0.9)",
    animation: "bounce 2s ease 0s 1 normal none",
  };
  const slideNumberStyle = {
    fontSize: "10px",
    fontWeight: "bold",
    color: "grey",
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Carousel
          data={data}
          time={4000}
          display="flex"
          width="500px"
          height="350px"
          padding="5px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic
          dots
          pauseIconColor="white"
          pauseIconSize="50px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            textAlign: "center",
            maxWidth: "500px",
            maxHeight: "400px",
            margin: "10px auto",
          }}
        />
      </div>
    </div>
  );
}

CarouselComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselComponent;
