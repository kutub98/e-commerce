import Image from "next/image";
import React from "react";
import hero from "@/app/Assets/Hero.jpg";
const Hero = () => {
  return (
    <div className="customWidth px-8 py-6 my-8 h-[320px]">
      <Image src={hero} width={1320} height={320} alt="dailyNecessities" />
    </div>
  );
};

export default Hero;
