import React from "react";
import Image from "next/image";
import DualPhone from "@/public/images/dual-image-auda-2.png";

const Hero = () => {
  return (
    <div className="px-96 py-16 ">
      {/* <h1 className="text-white text-7xl font-medium">Auda</h1> */}
      <div className="max-w-[40rem] mt-3">
        <h3 className="text-white text-5xl font-medium ">
          <span>Connect, find communities, and </span>
          <span className="main-gradient-text">grow businesses</span> around
          <span className="main-gradient-text"> music </span>with
          <span className="main-gradient-text"> Auda</span>.
        </h3>
      </div>
      <div>
        <Image
          src={DualPhone}
          alt="Portrait"
          width="892"
          height="892"
          priority={true}
        />
      </div>
      <div className="bg-white h-[0.1rem] w-full mt-7 gradient-background rounded-2xl" />
    </div>
  );
};

export default Hero;
