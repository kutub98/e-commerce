"use client";
const {
  Typography,
  Button,
  Input,
  Drawer
} = require("@material-tailwind/react");
import { GoSearch } from "react-icons/go";
import { FaBars } from "react-icons/fa6";
import { PiXBold } from "react-icons/pi";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  // Close drawer on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("overlay")) {
      setOpenNav(false);
    }
  };

  const navLinks = (
    <ul className="lg:flex flex-row ">
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
          className="lg:bg-blue-gray-500 px-4 py-2 rounded-md mr-2 mb-2 lg:mb-0" // consistent padding and spacing
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
      <div className="flex justify-between items-center">
        <div className="lg:hidden" onClick={() => setOpenNav((prev) => !prev)}>
          {openNav ? <PiXBold /> : <FaBars />}
        </div>
        {/* searchbar */}
        <div className="relative">
          <GoSearch className="absolute top-2 left-4 h-6 w-6 cursor-pointer" />
          <Input className="px-6 py-4 hidden" />
        </div>
        {/* logo */}
        <div>
          <h1>SuperShop</h1>
        </div>
        {/* login & shop */}
        <div className="flex justify-end space-x-3 hidden lg:block">
          <Button>Login</Button>
          <Button>Shop</Button>
        </div>
        {/* iconButton */}

        {/* Drawer for navigation links */}

        {openNav && (
          <div
            className="fixed inset-0 top-[88px] bg-black bg-opacity-50 z-[998] overlay"
            onClick={handleClickOutside}
          >
            <div
              className={`fixed top-[88px] left-0 bg-white z-[999] w-3/5 h-svh p-4 lg:hidden transform transition-transform duration-300 ${
                openNav
                  ? "translate-x-0 overflow-y-scroll"
                  : "-translate-x-full"
              }`}
            >
              {navLinks}
              <div>more</div>
              <div>more</div>
              <div>more</div>
              <div>more</div>
              <div>more</div>
              <div>more</div>
              <div>more</div>
              <div>more</div>
              <div>more</div>
              <div>more</div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:flex">{navLinks}</div>
    </div>
  );
};

export default NavBar;
