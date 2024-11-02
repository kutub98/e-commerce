"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Tooltip
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiBars4 } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { HiBars2 } from "react-icons/hi2";

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

  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`
    }
  ];

  return (
    <div className="customWidth px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="w-full py-4 text-center primaryBg rounded-lg shadow-lg mb-6">
        <h1 className="text-2xl lg:text-3xl text-center text-white font-semibold">
          All Products
        </h1>
      </div>

      {/* Filters Header */}
      <div className="flex justify-between px-8 my-3">
        <div className="flex space-x-4">
          <h1
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setOpenFilters(!openFilters)}
          >
            Filters <IoIosArrowDown className="h-6 w-6" stroke="2" />
          </h1>{" "}
          <div className="flex space-3">
            <label className="mr-3 hidden md:block">Sort by:</label>
            <select>
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
            size=""
          >
            <HiBars3 className="primaryBg h-5 w-5 text-white" />
          </Tooltip>
          <Tooltip
            content="2 Colum"
            placement="top"
            className="bg-[#ff8c42] text-xs"
            size=""
          >
            <HiBars2 className="primaryBg h-5 w-5 text-white rotate-[90deg]" />
          </Tooltip>
          <Tooltip
            content="3 Colum"
            placement="top"
            className="bg-[#ff8c42] text-xs "
            size=""
          >
            <HiBars3 className="primaryBg h-5 w-5 text-white rotate-[90deg] hidden md:block" />
          </Tooltip>
          <Tooltip
            content="4 Colum"
            placement="top"
            className="bg-[#ff8c42] text-xs hidden lg:block"
            size=""
          >
            <HiBars4 className="primaryBg h-5 w-5 text-white rotate-[90deg] hidden lg:block" />
          </Tooltip>
        </div>
      </div>

      {/* Tabs with responsive design */}
      <div className="flex flex-col lg:flex-row items-start gap-4 px-8">
        <Tabs
          id="custom-animation"
          value="html"
          orientation="horizontal"
          className="w-full lg:flex lg:justify-start"
        >
          {/* Tab headers - with sliding animation */}
          <TabsHeader
            className={`transform transition-transform duration-500  ${
              openFilters ? "translate-x-0" : "-translate-x-full"
            } lg:flex-col z-[999] bg-[#ff8c42] lg:flex lg:w-[300px] lg:border-r border-gray-200`}
            style={{ scrollbarWidth: "none" }}
          >
            <div className=" justify-between mb-3 hidden lg:flex">
              <h1 className="text-lg">Collection</h1>
              <IoIosArrowDown
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
                  className="text-sm sm:text-base lg:text-lg px-3 py-2 transform transition-transform duration-500"
                >
                  {label}
                </Tab>
              ))}
          </TabsHeader>

          {/* Tab body - panel descriptions */}
          <TabsBody
            animate={{
              initial: { opacity: 0, y: 30 },
              mount: { opacity: 1, y: 0 },
              unmount: { opacity: 0, y: 30 }
            }}
            className={`w-full lg:w-full lg:pl-4 ${
              openFilters ? "mt-0" : "-mt-8"
            } `}
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
      </div>
    </div>
  );
};

export default AllProducts;
