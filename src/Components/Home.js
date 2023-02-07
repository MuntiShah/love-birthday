import React from "react";
import "./Home.css";
import img from "../images/Munti1.jpg";
import Img from "../images/Love3.jpg";
import image from "../images/Tooba1.jpg";

export default function Home() {
  return (
    <div className="container-fluid my-2 d-flex justify-content-center">
      <div className="my">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item ">
              <img src={img} alt="" />
            </div>
            <div className="carousel-item active">
              <img src={image} alt="" />
            </div>
            <div className="carousel-item">
              <img src={Img} alt="" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
