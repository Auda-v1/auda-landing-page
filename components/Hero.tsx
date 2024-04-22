import React from "react";

const Hero = () => {
  return (
    <div className="px-96 py-36 ">
      <h1 className="text-white text-7xl font-medium">Auda</h1>
      <div className="max-w-[40rem] mt-3">
        <h3 className="text-white text-5xl font-medium ">
          <span>connect, find communities, and </span>
          <span className="main-gradient-text">grow businesses</span> around
          <span className="main-gradient-text"> music.</span>
        </h3>
        <div className="bg-white h-[0.1rem] w-full mt-7 gradient-background rounded-2xl" />
      </div>
    </div>
  );
};

export default Hero;
