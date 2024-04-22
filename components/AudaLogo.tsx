import React from "react";
import Image from "next/image";
import AudaLogo from "@/public/images/auda-logo-v3.png";

export default function AudaLogoIcon() {
  return (
    <div className="fixed top-0 left-5 w-[7rem] h-[7rem] flex flex-row  z-[2001]">
      <Image src={AudaLogo} alt="Portrait" width="152" priority={true} />
    </div>
  );
}
