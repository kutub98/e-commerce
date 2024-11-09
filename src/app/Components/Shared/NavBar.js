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
import Link from "next/link";

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
    return () => window.removeEventListener("resize", handleResize);
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

  const navLinksWithLink = [
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

  const navLinks = (
    <ul className="lg:flex lg:flex-row lg:flex-wrap px-2 md:px-1">
      {navLinksWithLink.map((menu) => (
        <li
          key={menu.name}
          className=" ButtonText px-4 py-2 md:px-3 rounded-md mr-2 mb-2 lg:mb-0 my-2 "
          onClick={() => setOpenNav(false)}
        >
          <Typography
            variant=""
            className="text-gray-400 font-medium text-lg lg:text-base xl:text-lg"
          >
            <a
              href={menu.link}
              className="ButtonText capitalize hover:text-[#0a1e2d] "
            >
              {menu.name}
            </a>
          </Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="customWidth">
      {openSearchBar ? (
        <div className="fixed inset-0 w-full max-w-[1320px] mx-auto bg-black bg-opacity-50 z-[9999] overlay">
          <div ref={searchBarRef} className="relative z-[9999]">
            {/* Search Store */}
            <div className=" border-none justify-between my0 flex md:hidden items-center b-white pt-4 shadow-md px-6 bg-white z-[991]">
              <h1>Search store</h1>
              <PiXBold
                className="PrimaryText h-6 w-6"
                onClick={() => setOpenSearchBar(false)}
              />
            </div>
            {/* Clickable Searchbar */}
            <div className="flex justify-between w-full relative items-center bg-white px-6 pb-4 md:pt-4 border-none">
              <div className="md:w-1/2 hidden md:block">
                <Link href={"/"}>
                  <Image
                    src={logo}
                    height={50}
                    width={50}
                    alt="logo"
                    className="primaryBg rounded-full p-1"
                  />
                </Link>
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
          <div className="flex justify-between items-center my-3 primaryBg w-full px-6 py-2">
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
              <Link href={"/"}>
                <Image
                  src={logo}
                  height={70}
                  width={70}
                  alt="logo"
                  className="primaryBg rounded-full p-1"
                />
              </Link>
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
            <div className="fixed top-[84px] left-0 primaryBg z-[10000]  h-screen w-2/3 p-4 lg:hidden overflow-y-auto">
              {navLinks}
              <div className="block px-3 pb-20 space-y-3">
                <h1 className="text-xl text-white">My Account</h1>
                <Button className="ButtonBg px-4 py-2 w-full">Login</Button>
                <Button className="border px-4 py-2 w-full">Register</Button>
              </div>
            </div>
          )}

          <div className="hidden lg:flex -mt-4 z-[999] bg-white">
            {navLinks}
          </div>
        </>
      )}

      {open && (
        <div className="w-full h-screen fixed overlay bg-black opacity-75 z-[9999]"></div>
      )}

      <Drawer
        open={open}
        onClose={closeDrawer}
        placement="right"
        className="fixed p-4 w-full h-screen z-[10000]"
      >
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h5">Shopping Cart</Typography>
          <IconButton variant="text" onClick={closeDrawer}>
            <PiXBold />
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
