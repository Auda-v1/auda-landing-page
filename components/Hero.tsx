import React from "react";
import Image from "next/image";
import LightDualPhone from "@/public/images/auda-bg-bg-bg.png";
import { TextField, Button } from "@mui/material";
import { Apple, Google } from "@mui/icons-material";

const Hero = () => {
  return (
    <div className="px-56 py-16">
      <div className=" mt-3">
        <h3 className="text-black text-5xl font-medium text-center">
          <span>Connect, find communities, and </span>
          <span className="main-gradient-text">grow businesses</span> around
          <span className="main-gradient-text"> music </span>with
          <span className="main-gradient-text"> Auda</span>.
        </h3>
      </div>
      <div className="mt-16 ml-16 flex flex-row">
        <Image
          src={LightDualPhone}
          alt="Portrait"
          width="652"
          priority={true}
        />
        <div className="flex flex-col w-full ml-16 mr-12 my-16 max-w-lg">
          <h1 className="text-black text-5xl font-medium ">
            Join our mailing list to get updates as soon as they come out
          </h1>
          <div className="mt-10 flex flex-col">
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
          <div className="mt-16 flex flex-row justify-between">
            <div className="bg-black rounded-lg flex justify-center items-center p-2">
              <Apple
                sx={{
                  fontSize: "4.5rem",
                  color: "white",
                }}
              />
              <div className="flex flex-col text-center mr-5">
                <p className="text-white">Download on the</p>
                <p className="text-white text-3xl">App Store</p>
              </div>
            </div>

            <div className="bg-black rounded-lg flex justify-center items-center p-2">
              <Google
                sx={{
                  fontSize: "4.5rem",
                  color: "white",
                }}
              />
              <div className="flex flex-col text-center mr-5">
                <p className="text-white">Download on the</p>
                <p className="text-white text-3xl">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[0.2rem] w-full mt-16 gradient-background rounded-2xl" />
      <div className="flex justify-center">
        <h1 className="text-black text-2xl text-center mt-5 font-medium max-w-5xl">
          We want to give people the power to build community and bring the
          world closer together. We think that music is the way to do that.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
