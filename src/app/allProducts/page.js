"use client";
import { Tooltip, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { HiBars4, HiBars3, HiBars2 } from "react-icons/hi2";
import Ghee from "../ghee/page";
import { FaArrowUp } from "react-icons/fa6";

const AllProducts = () => {
  const [openTabs, setOpenTabs] = useState(true);
  const [openFilters, setOpenFilters] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setOpenFilters(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinksWithLink = [
    { name: "All Categories", link: "/allProducts", content: <Ghee /> },
    { name: "Offer", link: "/offer", content: <Ghee /> },
    { name: "Sharisa Oil", link: "/sharisaOil", content: <Ghee /> },
    { name: "Dates", link: "/dates", content: <Ghee /> },
    { name: "Ghee", link: "/ghee", content: <Ghee /> },
    { name: "Masala", link: "/masala", content: <Ghee /> },
    { name: "Organic Oil", link: "/organicOil", content: <Ghee /> },
    { name: "Nuts & Seeds", link: "/nutsSeeds", content: <Ghee /> },
    { name: "Tea/Coffee", link: "/teaCoffee", content: <Ghee /> },
    { name: "Functional Food", link: "/functionalFood", content: <Ghee /> }
  ];

  return (
    <div className={`customWidth px-4 sm:px-6 lg:px-8 py-6 overflow-hidden `}>
      {/* Header */}
      <div className="w-full py-4 text-center primaryBg rounded-lg shadow-lg mb-6">
        <h1 className="text-xl lg:text-3xl text-center text-white">
          All Products
        </h1>
      </div>

      {/* Filters Header */}
      <div className="flex justify-between px-8 my-3 overflow-hidden">
        <div className="flex space-x-4">
          <h1
            className="flex items-center space-x-2 cursor-pointer select-none"
            onClick={() => setOpenFilters(!openFilters)}
          >
            <span>Filters</span>
            <IoIosArrowUp
              className={`h-5 w-5 transition-transform duration-300 ${
                openFilters ? "rotate-0" : "-rotate-180"
              }`}
              stroke="2"
            />
          </h1>

          <div className="flex space-3">
            <label className="mr-3 hidden md:block">Sort by:</label>
            <select className="border-none text-sm sm:text-sm md:text-base">
              <option>Best Sell</option>
              <option>Features</option>
              <option>A-Z</option>
              <option>Z-A</option>
              <option>Price Low-High</option>
              <option>Price High-Low</option>
              <option>Date New-Old</option>
              <option>Price Old-New</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-3 justify-end">
          <Tooltip
            content="1 Colum"
            placement="top"
            className="bg-[#ff8c42] text-xs"
          >
            <HiBars3 className="primaryBg h-5 w-5 text-white" />
          </Tooltip>
          <Tooltip
            content="2 Colum"
            placement="top"
            className="bg-[#ff8c42] text-xs"
          >
            <HiBars2 className="primaryBg h-5 w-5 text-white rotate-[90deg]" />
          </Tooltip>
          <Tooltip
            content="3 Colum"
            placement="top"
            className="bg-[#ff8c42] text-xs "
          >
            <HiBars3 className="primaryBg h-5 w-5 text-white rotate-[90deg] hidden md:block" />
          </Tooltip>
          <Tooltip
            content="4 Colum"
            placement="top"
            className="bg-[#ff8c42] text-xs hidden lg:block"
          >
            <HiBars4 className="primaryBg h-5 w-5 text-white rotate-[90deg] hidden lg:block" />
          </Tooltip>
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex justify-between gap-3 customWidth overflow-hidden">
        <div
          className={` shadow-lg  bg-white px-4 overflow-hidden transform transition-all duration-500 origin-left ${
            openFilters
              ? "scale-x-100 opacity-100 w-full md:w-1/5 "
              : "scale-x-0 opacity-0 "
          }`}
        >
          {/* Header with toggle button */}
          <div className="justify-between mb-3 hidden lg:flex px-4">
            <h1 className="text-lg">Collection</h1>
            <h1
              className="flex items-center space-x-2 cursor-pointer select-none"
              onClick={() => setOpenTabs(!openTabs)}
            >
              <IoIosArrowUp
                className={`h-5 w-5 transition-transform duration-300 ${
                  openTabs ? "rotate-0" : "-rotate-180"
                }`}
                stroke="2"
              />
            </h1>
          </div>
          <div className="flex justify-between">
            <div
              className={` justify-center transform h-auto p-0 m-0 duration-500 ease-in-out overflow-hidden ${
                openTabs
                  ? " scale-y-100 h-auto opacity-100"
                  : " scale-y-0 max-h-0 opacity-0 m-0 p-0"
              }`}
            >
              {navLinksWithLink.map((item, key) => (
                <ul key={key}>
                  <Typography className="px-4 py-2 rounded cursor-pointer capitalize m-1 relative overflow-hidden group">
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#ff8c42] transition-all duration-300 group-hover:w-full"></span>
                  </Typography>
                </ul>
              ))}
            </div>
            <span
              onClick={() => setOpenFilters(false)}
              className="text-base md:hidden pr-4"
            >
              Close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

{
  /* <div className="flex flex-col lg:flex-row items-start gap-4 px-8">
  <Tabs
    id="custom-animation"
    value="html"
    orientation="horizontal"
    className="w-full lg:flex lg:justify-start"
  >
    
    <TabsHeader
      className={`transform transition-transform duration-500 ${
        openFilters
          ? "translate-x-0 lg:w-[270px] m-0"
          : "-translate-x-[1020px] lg:w-0"
      } bg-[#ff8c42] lg:flex lg:flex-col lg:border-r border-gray-200 z-[989]`}
      style={{ scrollbarWidth: "none" }}
    >
      <div className="justify-between mb-3 hidden lg:flex">
        <h1 className="text-lg">Collection</h1>
        <IoIosArrowUp
          className="h-6 w-6 cursor-pointer"
          stroke="2"
          onClick={() => setOpenTabs(!openTabs)}
        />
      </div>

      {openTabs &&
        data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="block lg:flex text-sm sm:text-base lg:text-lg px-3 py-2 transition-transform duration-500"
          >
            {label}
          </Tab>
        ))}
    </TabsHeader>

  
    <TabsBody
      animate={{
        initial: { opacity: 0, y: 30 },
        mount: { opacity: 1, y: 0 },
        unmount: { opacity: 0, y: 30 }
      }}
      className={`w-full lg:w-full ${
        openFilters ? "mt-0" : "-mt-8 lg:mt-0 lg:w-full"
      }`}
    >
      {data.map(({ value, desc }) => (
        <TabPanel
          key={value}
          value={value}
          className="p-0 lg:p-4 bg-white rounded-lg shadow-md"
        >
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {desc}
          </p>
        </TabPanel>
      ))}
    </TabsBody>
  </Tabs>
</div>; */
}
