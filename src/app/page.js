import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import AllProducts from "./allProducts/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <AllProducts />
    </div>
  );
}
