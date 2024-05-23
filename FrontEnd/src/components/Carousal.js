import React from "react";
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
const Carousal = () => {
  return (
    <div
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      style={{ objectFit: "contain !important" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" id="carousel">
        <div
          className="carousel-caption d-none d-md-block"
          style={{ zIndex: "10" }}
        >
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn bg-success text-white" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src={image1}
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(30%)" }}
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src={image2}
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(30%)" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={image3}
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(30%)" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousal;
