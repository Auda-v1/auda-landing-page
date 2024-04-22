"use client";

import React from "react";
import Image from "next/image";
import LightDualPhone from "@/public/images/auda-bg-bg-bg.png";
import { TextField, Button } from "@mui/material";
import { Apple, Google } from "@mui/icons-material";

const Hero = () => {
  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div className="mt-10 flex items-center justify-center flex-col">
      <div className="max-w-[80rem]">
        <h3 className="text-black text-4xl lg:text-5xl font-medium xl:text-center mx-12">
          Connect, find<span className="main-gradient-text"> communities</span>,
          and grow
          <span className="main-gradient-text"> businesses</span> around your
          favorite
          <span className="main-gradient-text"> music</span> with Auda.
        </h3>
      </div>
      <div className="mt-16 ml-16 flex flex-row mr-16">
        <div className="xs:hidden  sm:hidden  md:hidden lg:hidden xl:block">
          <Image
            src={LightDualPhone}
            alt="Portrait"
            width="652"
            priority={true}
          />
        </div>
        <div className="flex flex-col w-full xl:ml-16 xl:mr-12 my-16 max-w-lg border border-red-500">
          <h1 className="text-black text-4xl lg:text-5xl font-medium ">
            Join our mailing list to get updates as soon as they come out
          </h1>
          <div className="mt-10 flex flex-col ">
            <TextField
              id="outlined-basic"
              label="What's your email?"
              variant="outlined"
              sx={{ background: "#FAFAFA" }}
            />
            <TextField
              id="outlined-basic"
              label="What's your full name?"
              variant="outlined"
              sx={{ background: "#FAFAFA", marginTop: 1 }}
            />

            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                background: "#0295F6",
                marginTop: 5,
                textTransform: "none",
                height: 50,
                fontSize: 20,
              }}
            >
              Send
            </Button>
          </div>

          <div>
            <h1 className="text-center mt-10 text-xl font-regular">
              Get the app.
            </h1>
          </div>

          <div className="mt-5 flex flex-row justify-between ">
            <div className="bg-black rounded-lg flex justify-center items-center p-2">
              <Apple
                sx={{
                  fontSize: "4rem",
                  color: "white",
                }}
              />
              <div className="flex flex-col  mr-3">
                <p className="text-white">Download on the</p>
                <p className="text-white text-3xl">App Store</p>
              </div>
            </div>

            <div className="bg-black rounded-lg flex justify-center items-center p-2">
              <Google
                sx={{
                  fontSize: "4rem",
                  color: "white",
                }}
              />
              <div className="flex flex-col mr-3">
                <p className="text-white">Get it on</p>
                <p className="text-white text-3xl">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
