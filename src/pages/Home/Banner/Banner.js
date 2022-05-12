import React from "react";
import banner from "../../../images/hero.png";

const Banner = () => {
  return (
    <div className="hero-section hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="max-w-sm rounded-lg shadow-2xl lg:w-lg w-[100%] "
          alt=""
        />

        <div>
          <h1 className="text-5xl font-bold text-accent">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="hero-button btn btn-secondary font-bold border-0 text-white ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
