"use client";
const { Typography, Button, Input } = require("@material-tailwind/react");
import { GoSearch } from "react-icons/go";
import { FaBars } from "react-icons/fa6";
import { PiXBold } from "react-icons/pi";
import { useEffect, useState, useRef } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const searchBarRef = useRef(null);

  // Close drawer on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  // Close openSearchBar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        setOpenSearchBar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = (
    <ul className="lg:flex lg:flex-row lg:flex-wrap">
      {[
        "All Categories",
        "Offer",
        "Honey",
        "Sharisa Oil",
        "Dates",
        "Ghee",
        "Masala",
        "Organic Oil",
        "Nuts & Seeds",
        "Tea/Coffee",
        "Functional Food"
      ].map((menu) => (
        <li
          key={menu}
          className="bg-blue-gray-500 px-4 py-2 rounded-md mr-2 mb-2 lg:mb-0 my-2"
          onClick={() => setOpenNav(false)}
        >
          <Typography variant="md" className="text-gray-400 font-medium">
            <a href="#">{menu}</a>
          </Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="customWidth px-8 py-6 bg-white shadow-lg sticky top-0 left-0 w-full">
      {openSearchBar ? (
        <div className="fixed inset-0 w-full max-w-[1320px] mx-auto bg-black bg-opacity-50 z-[998] overlay">
          <div ref={searchBarRef} className="">
            {/* Search Store */}
            <div className=" border-none justify-between my0 flex md:hidden items-center b-white pt-4 shadow-md px-8 bg-white z-[999]">
              <h1>Search store</h1>
              <PiXBold onClick={() => setOpenSearchBar(false)} />
            </div>
            {/* Clickable Searchbar */}
            <div className="flex justify-between w-full relative items-center bg-white px-8 pb-4 md:pt-4 border-none">
              <div className="md:w-1/2 hidden md:block">
                <h1>Super Shop</h1>
              </div>
              <div className="relative lg:w-2/3 w-full">
                <Input
                  className="px-3 py-2 rounded w-full"
                  placeholder="Search here..."
                />
                <GoSearch className="absolute h-6 w-6 top-1/2 right-2 transform -translate-y-1/2 cursor-pointer" />
              </div>
              <div className="justify-end space-x-3 lg:flex lg:order-3 w-1/3 md:flex hidden">
                <FaUserLarge className="h-5 w-5" stroke="2" />
                <FaShoppingBag className="h-5 w-5" stroke="2" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center my-3 bg-blue-gray-50 w-full">
            <div
              className="lg:hidden w-1/3"
              onClick={() => setOpenNav((prev) => !prev)}
            >
              {openNav ? <PiXBold /> : <FaBars />}
            </div>
            <div className="lg:order-2 w-1/3 text-center">
              <h1>SuperShop</h1>
            </div>
            <div className="lg:order-1 bg-blue-gray-400 overflow-hidden w-1/3 items-center hidden lg:flex">
              <GoSearch
                className="h-6 w-6 cursor-pointer"
                onClick={() => setOpenSearchBar(true)}
              />
              <Input className="px-6 py-4 hidden" />
            </div>
            <div className="justify-end space-x-3 flex lg:flex lg:order-3 w-1/3">
              <FaUserLarge className="h-5 w-5 hidden lg:block" stroke="2" />
              <GoSearch
                className="h-6 w-6 cursor-pointer block lg:hidden"
                onClick={() => setOpenSearchBar(true)}
              />
              <FaShoppingBag className="h-5 w-5" stroke="2" />
            </div>
          </div>
          {openNav && (
            <div
              className="fixed inset-0 top-[88px] bg-black bg-opacity-50 z-[998] overlay"
              onClick={() => setOpenNav(false)}
            >
              <div
                className={`fixed top-[88px] left-0 bg-white z-[999] w-1/2 h-svh p-4 lg:hidden transform transition-transform duration-300 ${
                  openNav
                    ? "translate-x-0 overflow-y-scroll"
                    : "-translate-x-full"
                }`}
              >
                {navLinks}
              </div>
            </div>
          )}
          <div className="hidden lg:flex">{navLinks}</div>
        </>
      )}
    </div>
  );
};

export default NavBar;
