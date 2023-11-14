import React from "react";
import "./Landing.css";
import { useQuery } from "react-query";

const LandingPage = () => {
  return (
    <>
      <div className="nav-div">
        <nav>
          <div class="nav1">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div class="nav2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <button class="btn">Login</button>
          </div>
          <div class="nav3">
            <i class="fa-solid fa-magnifying-glass"></i>
            <img src="src/assets/images/Logo.png" alt="" />
            <i class="fa-solid fa-bars"></i>
          </div>
        </nav>
      </div>
      <div className="icon">
        <img src="src/assets/images/Logo.png" alt="" />
      </div>
      <div className="mid-items">
        <p>Homepage</p>
        <p>Recipe Page</p>
        <p>Pages</p>
        <p>Buy</p>
      </div>
      <div className="image">
        <img
          className="main-img"
          src="https://media.istockphoto.com/id/1437043850/photo/apple-combination.jpg?s=2048x2048&w=is&k=20&c=b69CmfeNhFLCvm0CRD04CAsN2ZE_nBBO-g4WQYbwXws="
          alt=""
        />
        <div className="h1">Apple Combination Stock</div>
      </div>
    </>
  );
};

export default LandingPage;
