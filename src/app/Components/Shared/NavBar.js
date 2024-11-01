"use client";
const {
  Typography,
  Input,
  Button,
  Drawer,
  IconButton
} = require("@material-tailwind/react");
import { GoSearch } from "react-icons/go";
import { FaBars } from "react-icons/fa6";
import { PiXBold } from "react-icons/pi";
import React, { useEffect, useState, useRef } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import logo from "@/app/Assets/logo.png";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const searchBarRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

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
          className=" ButtonText px-4 py-2 rounded-md mr-2 mb-2 lg:mb-0 my-2"
          onClick={() => setOpenNav(false)}
        >
          <Typography variant="md" className="text-gray-400 font-medium">
            <a href="#" className="ButtonText">
              {menu}
            </a>
          </Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="customWidth p-0 m-0 shadow-lg bg-white sticky z-[999] top-0 left-0 w-full">
      {openSearchBar ? (
        <div className="fixed inset-0 w-full max-w-[1320px] mx-auto bg-black bg-opacity-50 z-[998] overlay">
          <div ref={searchBarRef} className="">
            {/* Search Store */}
            <div className=" border-none justify-between my0 flex md:hidden items-center b-white pt-4 shadow-md px-8 bg-white z-[991]">
              <h1>Search store</h1>
              <PiXBold
                className="PrimaryText h-6 w-6"
                onClick={() => setOpenSearchBar(false)}
              />
            </div>
            {/* Clickable Searchbar */}
            <div className="flex justify-between w-full relative items-center bg-white px-8 pb-4 md:pt-4 border-none">
              <div className="md:w-1/2 hidden md:block">
                <Image
                  src={logo}
                  height={50}
                  width={50}
                  alt="logo"
                  className="primaryBg rounded-full p-1"
                />
              </div>
              <div className="relative lg:w-2/3 w-full">
                <Input
                  className="px-3 py-2 rounded w-full PrimaryText"
                  placeholder="Search here..."
                />
                <GoSearch className="absolute h-6 w-6  top-1/2 right-2 PrimaryText transform -translate-y-1/2 cursor-pointer" />
              </div>
              <div className="justify-end space-x-3 lg:flex lg:order-3 w-1/3 md:flex hidden">
                <FaUserLarge className="h-5 w-5 PrimaryText " stroke="2" />
                <FaShoppingBag
                  className="h-5 w-5 PrimaryText cursor-pointer"
                  onClick={openDrawer}
                  stroke="2"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center my-3 primaryBg w-full px-8 py-2">
            <div
              className="lg:hidden w-1/3"
              onClick={() => setOpenNav((prev) => !prev)}
            >
              {openNav ? (
                <PiXBold className="ButtonText" />
              ) : (
                <FaBars className="ButtonText" />
              )}
            </div>
            <div className="lg:order-2 w-1/3 text-center flex justify-center ButtonText">
              <Image
                src={logo}
                height={70}
                width={70}
                alt="logo"
                className="primaryBg rounded-full p-1"
              />
            </div>
            <div className="lg:order-1  overflow-hidden w-1/3 items-center hidden lg:flex">
              <GoSearch
                className="h-6 w-6  cursor-pointer ButtonText"
                onClick={() => setOpenSearchBar(true)}
              />
              <Input className="px-6 py-4 hidden ButtonText" />
            </div>
            <div className="justify-end space-x-3 flex lg:flex lg:order-3 w-1/3">
              <FaUserLarge
                className="h-5 w-5 ButtonText  hidden lg:block"
                stroke="2"
              />
              <GoSearch
                className="h-6 w-6  cursor-pointer ButtonText block lg:hidden"
                onClick={() => setOpenSearchBar(true)}
              />
              <FaShoppingBag
                className="h-5 w-5 ButtonText cursor-pointer"
                onClick={openDrawer}
                stroke="2"
              />
            </div>
          </div>
          {openNav && (
            <div
              className="fixed inset-0 pb-8 top-[84px] bg-black bg-opacity-50 z-[998] overlay"
              onClick={() => setOpenNav(false)}
            >
              <div
                className={`fixed top-[84px] left-0 primaryBg z-[99] h-screen w-2/3 p-4 lg:hidden transform transition-transform duration-700 overflow-y-auto ${
                  openNav ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                {navLinks}
                <div className="block flex-row flex-wrap space-y-3 px-3 pb-20">
                  <h1 className="text-xl text-white">My Account</h1>
                  <Button className="ButtonBg px-4 py-2 w-full PrimaryText">
                    Login
                  </Button>
                  <Button className="border !bg-none ButtonText px-4 py-2 w-full">
                    Register
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="hidden lg:flex menu z-[999]">{navLinks}</div>
        </>
      )}

      {open && (
        <div className="w-full h-screen fixed overlay bg-black opacity-75 "></div>
      )}

      <Drawer
        open={open}
        onClose={closeDrawer}
        placement="right"
        className="p-4 w-full "
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
