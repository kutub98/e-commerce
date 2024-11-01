import Image from "next/image";
import React from "react";
import hero from "@/app/Assets/Hero.jpg";
const Hero = () => {
  return (
    <div className="customWidth px-8 py-6 my-8 lg:h-[480px] md:h-[600px] h-[700px]">
      <Image src={hero} height="100%" width="100%" alt="dailyNecessities" />
    </div>
  );
};

export default Hero;
