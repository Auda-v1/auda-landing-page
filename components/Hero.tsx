"use client";

import React, { useState } from "react";
import Image from "next/image";
import LightDualPhone from "@/public/images/auda-bg-bg-bg.png";
import { TextField, Button } from "@mui/material";
import AudaLogoIcon from "./AudaLogo";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppStore from "@/public/images/ap-store.png";
import GooglePlay from "@/public/images/google-play.png";
import { FIREBASE_STORE } from "@/FirebaseConfig";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const database = FIREBASE_STORE;

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const newData = {
        email,
        name,
        createdAt: new Date(),
      };

      await addDoc(collection(database, "subscribers"), newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const mediumScreenSize = useMediaQuery("(min-width:1300px)");

  return (
    <>
      <AudaLogoIcon />
      <div className="mt-10 flex items-center justify-center flex-col">
        <div className="max-w-[80rem]">
          <h3 className="text-black text-4xl lg:text-5xl font-medium xl:text-center mx-2">
            Connect, find
            <span className="main-gradient-text"> communities</span>, and grow
            <span className="main-gradient-text"> businesses</span> around your
            favorite
            <span className="main-gradient-text"> music</span> with Auda.
          </h3>
        </div>
        <div className="mt-5 lg:mt-16 mx-2 flex flex-row ">
          {mediumScreenSize && (
            <div>
              <Image
                src={LightDualPhone}
                alt="Portrait"
                width="652"
                priority={true}
              />
            </div>
          )}

          <div className="flex flex-col xl:ml-16 xl:mr-12 lg:my-16 max-w-lg ">
            <h1 className="text-black text-xl lg:text-5xl font-medium ">
              Join our mailing list to get updates as soon as they come out
            </h1>
            <div className="mt-10 flex flex-col ">
              <TextField
                id="outlined-basic"
                label="What's your email?"
                variant="outlined"
                sx={{ background: "#FAFAFA" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="What's your full name?"
                variant="outlined"
                sx={{ background: "#FAFAFA", marginTop: 1 }}
                onChange={(e) => setName(e.target.value)}
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
                  "&:hover": {
                    background: "#52baff",
                  },
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
            <div className="mt-5 flex flex-row justify-around w-full">
              <div>
                <Image
                  src={AppStore}
                  alt="Portrait"
                  className="w-44 lg:w-[14rem]"
                  priority={true}
                />
              </div>
              <div>
                <Image
                  src={GooglePlay}
                  alt="Portrait"
                  className="w-44 lg:w-[14rem]"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
