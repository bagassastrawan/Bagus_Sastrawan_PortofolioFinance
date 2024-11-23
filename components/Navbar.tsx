"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 z-50 bg-transparent flex item justify-between">
      <div className="flex w-full items-center justify-between py-3 md-py-5">
            <div className="md:hidden">

              {/* Tampilan bUtton saat mobile */}
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
            
            {/* Logo */}
            <div className="logo">
              <Link to="home">
                <div className="flex items-center space-x-2 text-gray-900">
                  <h2 className="text-2xl font-bold">BagusSastrawan.</h2>
                </div>
              </Link>
            </div>
          <div>
            <div
            className={`absolute top-full left-0 w-full bg-white md:static md:w-auto md:flex md:items-center md:justify-center md:bg-transparent transition-all ${
        navbar ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center">
              <div className="flex flex-wrap justify-center">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block text-neutral-900 hover:text-neutral-500 px-4 py-2"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              </div>
              {/* {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
