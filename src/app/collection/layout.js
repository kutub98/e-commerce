"use client";
import NavBar from "../Components/Shared/NavBar";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { HiBars4, HiBars3, HiBars2 } from "react-icons/hi2";
import { Tooltip, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function CollectionLayout({ children }) {
  const router = useRouter();
  const [openTabs, setOpenTabs] = useState(true);
  const [openFilters, setOpenFilters] = useState(true);
  const [activeTab, setActiveTab] = useState("All Categories");

  useEffect(() => {
    if (router.pathname) {
      const currentPath = router.pathname.split("/")[2];
      setActiveTab(currentPath || activeTab);
    }
  }, [router.pathname]);

  const navItems = [
    { name: "All Categories", link: "/collection/all" },
    { name: "Offer", link: "/collection/offer" },
    { name: "Sharisa Oil", link: "/collection/sharisaOil" },
    { name: "Dates", link: "/collection/dates" },
    { name: "Ghee", link: "/collection/ghee" },
    { name: "Masala", link: "/collection/masala" },
    { name: "Organic Oil", link: "/collection/organicOil" },
    { name: "Nuts & Seeds", link: "/collection/nutsSeeds" },
    { name: "Tea/Coffee", link: "/collection/teaCoffee" },
    { name: "Functional Food", link: "/collection/functionalFood" }
  ];

  const handleTabClick = (name) => {
    setActiveTab(name);
    const path = navItems.find((item) => item.name === name)?.link;
    if (path) router.push(path);
    if (window.innerWidth < 768) {
      setOpenFilters(false);
    }
  };

  const activeContent = navItems.find(
    (item) => item.name.toLowerCase() === activeTab.toLowerCase()
  )?.content;

  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="customWidth px-4 sm:px-6 lg:px-6 py-6 overflow-hidden relative">
          {/* Filters Header */}
          <div className="fixed w-full max-w-[1320px] lg:top-40 z-[900] transform translate-x-0 bg-white p-1">
            <div className="flex justify-between px-6 my-3 overflow-hidden ">
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
                  content="1 Column"
                  placement="top"
                  className="bg-[#ff8c42] text-xs"
                >
                  <HiBars3 className="primaryBg h-5 w-5 text-white" />
                </Tooltip>
                <Tooltip
                  content="2 Columns"
                  placement="top"
                  className="bg-[#ff8c42] text-xs"
                >
                  <HiBars2 className="primaryBg h-5 w-5 text-white rotate-[90deg]" />
                </Tooltip>
                <Tooltip
                  content="3 Columns"
                  placement="top"
                  className="bg-[#ff8c42] text-xs hidden md:block"
                >
                  <HiBars3 className="primaryBg hidden md:block h-5 w-5 text-white rotate-[90deg]" />
                </Tooltip>
                <Tooltip
                  content="4 Columns"
                  placement="top"
                  className="bg-[#ff8c42] text-xs hidden lg:block"
                >
                  <HiBars4 className="primaryBg h-5 w-5 hidden lg:block text-white rotate-[90deg]" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        {/* Header with Dynamic Category Name */}
        <div className="pt-6 pb-3 bg-[#ff8c42] transform translate-x-0 w-full max-w-[1320px] mx-auto mt-10 overflow-hidden">
          <h1 className="text-xl lg:text-3xl text-center text-white">
            {activeTab.replace(/([a-z])([A-Z])/g, "$1 $2")}
          </h1>
        </div>
        {/* Content */}
        <div className="flex transform translate-x-0 w-full max-w-[1320px] mx-auto overflow-hidden bg-green-500">
          {/* Sidebar */}
          <div
            className={`shadow-lg bg-white px-4 overflow-hidden transform transition-all duration-500 origin-left ${
              openFilters
                ? "scale-x-100 opacity-100 w-full sm:w-2/5 md:w-2/5 lg:w-1/5"
                : "scale-x-0 opacity-0 w-0"
            }`}
          >
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
                className={`transform h-auto p-0 m-0 duration-500 ease-in-out overflow-hidden ${
                  openTabs
                    ? "scale-y-100 h-auto opacity-100"
                    : "scale-y-0 max-h-0 opacity-0 m-0 p-0"
                }`}
              >
                {navItems.map((item, key) => (
                  <ul key={key}>
                    <Typography
                      className={`px-4 py-2 rounded cursor-pointer capitalize m-1 relative overflow-hidden group ${
                        activeTab === item.name
                          ? "text-[#ff8c42] font-medium"
                          : "text-black"
                      }`}
                      onClick={() => handleTabClick(item.name)}
                    >
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
          {/* Content Area */}
          <div
            className={`${
              openFilters
                ? "lg:block hidden"
                : "w-full sm:w-2/5 md:w-2/5 lg:w-1/5"
            }`}
          >
            {children || activeContent || (
              <p>Select a category to view content.</p>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
