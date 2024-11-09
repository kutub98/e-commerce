"use client";
import NavBar from "../Components/Shared/NavBar";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { HiBars4, HiBars3, HiBars2 } from "react-icons/hi2";
import { Tooltip, Typography } from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";

export default function CollectionLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [openTabs, setOpenTabs] = useState(true);
  const [openFilters, setOpenFilters] = useState(true);
  const [activeTab, setActiveTab] = useState("All Categories");
  const [scrollDirection, setScrollDirection] = useState("up");
  useEffect(() => {
    if (pathname) {
      const currentPath = pathname.split("/")[2];
      const matchedItem = navItems.find((item) =>
        item.link.includes(currentPath)
      );
      setActiveTab(matchedItem ? matchedItem.name : "All Categories");
    }
  }, [pathname]);

  // const navItems = [
  //   { name: "All Categories", link: "/collection/all" },
  //   { name: "Offer", link: "/collection/offer" },
  //   { name: "Sharisa Oil", link: "/collection/sharisaOil" },
  //   { name: "Dates", link: "/collection/dates" },
  //   { name: "Ghee", link: "/collection/ghee" },
  //   { name: "Masala", link: "/collection/masala" },
  //   { name: "Organic Oil", link: "/collection/organicOil" },
  //   { name: "Nuts & Seeds", link: "/collection/nutsSeeds" },
  //   { name: "Tea/Coffee", link: "/collection/teaCoffee" },
  //   { name: "Functional Food", link: "/collection/functionalFood" }
  // ];

  const navItems = [
    {
      name: "All Categories",
      link: "/collection/all"
    },
    {
      name: "Offer",
      link: "/collection/offer"
    },
    {
      name: "Sharisa Oil",
      link: "/collection/sharisaOil"
    },
    {
      name: "Dates",
      link: "/collection/dates"
    },
    {
      name: "Ghee",
      link: "/collection/ghee"
    },
    {
      name: "Masala",
      link: "/collection/masala"
    },
    {
      name: "Organic Oil",
      link: "/collection/organicOil"
    },
    {
      name: "Nuts & Seeds",
      link: "/collection/nutsSeeds"
    },
    {
      name: "Tea/Coffee",
      link: "/collection/teaCoffee"
    },
    {
      name: "Functional Food",
      link: "/collection/functionalFood"
    }
  ];

  const handleTabClick = (name) => {
    setActiveTab(name);
    const path = navItems.find((item) => item.name === name)?.link;
    if (path) router.push(path);
    if (window.innerWidth < 768) {
      setOpenFilters(false);
    }
  };

  let lastScrollY = 0;
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setScrollDirection("down");
      } else if (currentScroll < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <div>
          <div
            className={` w-full  z-50 fixed top-0 transform mx-auto translate-x-0 transition-transform duration-300  ${
              scrollDirection === "down"
                ? "  -translate-y-full top-0 opacity-0"
                : "top-0 z-[9999] translate-y-0 opacity-100"
            }   transform translate-x-0 bg-white p-1`}
          >
            <NavBar />
          </div>
          <div className="w-full max-w-[1320px] mx-auto ">
            <div
              className={` w-full max-w-[1320px]  z-50 fixed transition-transform duration-300  ${
                scrollDirection === "down"
                  ? " lg:top-0 top-0 z-[9999] translate-y-0"
                  : "-translate-y-full md:top-44 lg:top-52 top-40 opacity-100"
              }   transform translate-x-0 bg-white p-1`}
            >
              <div className="flex justify-between px-3 my-3 overflow-hidden ">
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
            <div className="pt-6 pb-3 bg-[#ff8c42]  w-full max-w-[1320px] mx-auto lg:mt-48 md:mt-44 mt-36 overflow-hidden">
              <h1 className="text-xl lg:text-3xl text-center text-white">
                {activeTab.replace(/([a-z])([A-Z])/g, "$1 $2")}
              </h1>
            </div>

            <div className="flex">
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

              <div
                className={`${
                  openFilters
                    ? "lg:block hidden"
                    : "w-full sm:w-2/5 md:w-2/5 lg:w-1/5"
                }`}
              >
                {children || <p>Select a category to view content.</p>}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
