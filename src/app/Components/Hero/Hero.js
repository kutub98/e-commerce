import Image from "next/image";
import React from "react";
import hero from "@/app/Assets/Hero.jpg";
const Hero = () => {
  return (
    <div className="customWidth px-6 py-6 mb-20 ">
      <Image src={hero} height="100%" width="100%" alt="dailyNecessities" />
    </div>
  );
};

export default Hero;
