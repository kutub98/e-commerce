// "use client";
// import { Tooltip, Typography } from "@material-tailwind/react";
// import { useEffect, useState } from "react";
// import { IoIosArrowUp } from "react-icons/io";
// import { HiBars4, HiBars3, HiBars2 } from "react-icons/hi2";
// import Ghee from "@/app/collection/ghee/page";
// import Offer from "@/app/collection/offer/page";
// import SharisaOil from "@/app/collection/sharisaOil/page";
// import Dates from "@/app/collection/dates/page";
// import Masala from "@/app/collection/masala/page";
// import Nuts from "@/app/collection/nutsSeeds/page";
// import TeaCoffee from "@/app/collection/teaCoffee/page";
// import OrganicOil from "@/app/collection/organicOil/page";
// import FunctionalFood from "@/app/collection/functionalFood/page";

// const SideBar = () => {
//   const [openTabs, setOpenTabs] = useState(true);
//   const [openFilters, setOpenFilters] = useState(true);
//   const [activeTab, setActiveTab] = useState("All Categories");

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 960) {
//         setOpenFilters(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const navLinksWithLink = [
//     { name: "All Categories", link: "/collection/all", content: <Ghee /> },
//     { name: "Offer", link: "/collection/offer", content: <Offer /> },
//     {
//       name: "Sharisa Oil",
//       link: "/collection/sharisaOil",
//       content: <SharisaOil />
//     },
//     { name: "Dates", link: "/collection/dates", content: <Dates /> },
//     { name: "Ghee", link: "/collection/ghee", content: <Ghee /> },
//     { name: "Masala", link: "/collection/masala", content: <Masala /> },
//     {
//       name: "Organic Oil",
//       link: "/collection/organicOil",
//       content: <OrganicOil />
//     },
//     { name: "Nuts & Seeds", link: "/collection/nutsSeeds", content: <Nuts /> },
//     {
//       name: "Tea/Coffee",
//       link: "/collection/teaCoffee",
//       content: <TeaCoffee />
//     },
//     {
//       name: "Functional Food",
//       link: "/collection/functionalFood",
//       content: <FunctionalFood />
//     }
//   ];

//   const handleTabClick = (name) => {
//     setActiveTab(name);
//     if (window.innerWidth < 768) {
//       setOpenFilters(false); // Close the sidebar on mobile devices
//     }
//   };

//   const activeContent = navLinksWithLink.find(
//     (item) => item.name === activeTab
//   )?.content;

//   return (
//     <div className="customWidth px-4 sm:px-6 lg:px-8 py-6 overflow-hidden ">
//       {/* Header */}
//       <div className="w-full py-4 text-center primaryBg rounded-lg shadow-lg mb-6">
//         <h1 className="text-xl lg:text-3xl text-center text-white">
//           All Products
//         </h1>
//       </div>
//       {/* Filters Header */}
//       <div className="flex justify-between px-8 my-3 overflow-hidden">
//         <div className="flex space-x-4">
//           <h1
//             className="flex items-center space-x-2 cursor-pointer select-none"
//             onClick={() => setOpenFilters(!openFilters)}
//           >
//             <span>Filters</span>
//             <IoIosArrowUp
//               className={`h-5 w-5 transition-transform duration-300 ${
//                 openFilters ? "rotate-0" : "-rotate-180"
//               }`}
//               stroke="2"
//             />
//           </h1>
//           <div className="flex space-3">
//             <label className="mr-3 hidden md:block">Sort by:</label>
//             <select className="border-none text-sm sm:text-sm md:text-base">
//               <option>Best Sell</option>
//               <option>Features</option>
//               <option>A-Z</option>
//               <option>Z-A</option>
//               <option>Price Low-High</option>
//               <option>Price High-Low</option>
//               <option>Date New-Old</option>
//               <option>Price Old-New</option>
//             </select>
//           </div>
//         </div>
//         <div className="flex space-x-3 justify-end">
//           <Tooltip
//             content="1 Column"
//             placement="top"
//             className="bg-[#ff8c42] text-xs"
//           >
//             <HiBars3 className="primaryBg h-5 w-5 text-white" />
//           </Tooltip>
//           <Tooltip
//             content="2 Columns"
//             placement="top"
//             className="bg-[#ff8c42] text-xs"
//           >
//             <HiBars2 className="primaryBg h-5 w-5 text-white rotate-[90deg]" />
//           </Tooltip>
//           <Tooltip
//             content="3 Columns"
//             placement="top"
//             className="bg-[#ff8c42] text-xs"
//           >
//             <HiBars3 className="primaryBg h-5 w-5 text-white rotate-[90deg] hidden md:block" />
//           </Tooltip>
//           <Tooltip
//             content="4 Columns"
//             placement="top"
//             className="bg-[#ff8c42] text-xs hidden lg:block"
//           >
//             <HiBars4 className="primaryBg h-5 w-5 text-white rotate-[90deg] hidden lg:block" />
//           </Tooltip>
//         </div>
//       </div>
//       {/* Sidebar and Content */}
//       <div className="flex justify-between gap-3 customWidth overflow-hidden">
//         {/* Sidebar */}
//         <div
//           className={`shadow-lg bg-white px-4 overflow-hidden transform transition-all duration-500 origin-left ${
//             openFilters
//               ? "scale-x-100 opacity-100 w-full md:w-1/5"
//               : "scale-x-0 opacity-0 w-0"
//           }`}
//         >
//           <div className="justify-between mb-3 hidden lg:flex px-4">
//             <h1 className="text-lg">Collection</h1>
//             <h1
//               className="flex items-center space-x-2 cursor-pointer select-none"
//               onClick={() => setOpenTabs(!openTabs)}
//             >
//               <IoIosArrowUp
//                 className={`h-5 w-5 transition-transform duration-300 ${
//                   openTabs ? "rotate-0" : "-rotate-180"
//                 }`}
//                 stroke="2"
//               />
//             </h1>
//           </div>
//           <div className="flex justify-between">
//             <div
//               className={`transform h-auto p-0 m-0 duration-500 ease-in-out overflow-hidden ${
//                 openTabs
//                   ? "scale-y-100 h-auto opacity-100"
//                   : "scale-y-0 max-h-0 opacity-0 m-0 p-0"
//               }`}
//             >
//               {navLinksWithLink.map((item, key) => (
//                 <ul key={key}>
//                   <Typography
//                     className={`px-4 py-2  rounded cursor-pointer capitalize m-1 relative overflow-hidden group ${
//                       activeTab === item.name
//                         ? "text-[#ff8c42] font-medium"
//                         : "text-black"
//                     }`}
//                     onClick={() => handleTabClick(item.name)}
//                   >
//                     {item.name}
//                     <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#ff8c42] transition-all duration-300 group-hover:w-full"></span>
//                   </Typography>
//                 </ul>
//               ))}
//             </div>
//             <span
//               onClick={() => setOpenFilters(false)}
//               className="text-base md:hidden pr-4"
//             >
//               Close
//             </span>
//           </div>
//         </div>
//         {/* Content Area */}
//         <div
//           className={`bg-blue-gray-500 ${
//             openFilters ? " w-0 md:w-4/5 lg:w-4/5" : "w-full"
//           }`}
//         >
//           {/* {activeContent} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
