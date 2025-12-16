import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "./assets/logo.png"; // ⭐ YOUR LOGO HERE

const Header = () => {
  const [open, setOpen] = useState(false);

  const base =
    "text-gray-600 font-medium hover:text-blue-700 transition duration-300";
  const active = "text-blue-700 font-semibold";

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/certificate", label: "Problems" }, // ⭐ ADDED
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 shadow-sm bg-white/80 backdrop-blur-xl">
      <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CWIT Logo"
            className="object-contain w-20 h-20 drop-shadow-md"
          />
          <span className="flex text-xl font-extrabold tracking-tight text-blue-700 align-text-bottom text-uppercase">
            CODEWEB INSTITUTE OF TECHNOLOGY
          </span>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="items-center hidden space-x-10 md:flex">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => (isActive ? active : base)}
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-[3px] bg-blue-700 rounded-full"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP BUTTON */}
        <div className="hidden gap-4 md:flex">
          <motion.div whileHover={{ scale: 1.06 }}>
            <NavLink
              to="/login"
              className="px-6 py-2 font-semibold text-blue-700 transition border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white"
            >
              Login
            </NavLink>
          </motion.div>

          <motion.div whileHover={{ scale: 1.06 }}>
            <NavLink
              to="/register"
              className="px-6 py-2 font-semibold text-white transition bg-blue-700 rounded-full shadow hover:bg-blue-800"
            >
              Register
            </NavLink>
          </motion.div>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="text-3xl text-gray-700 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 py-6 bg-white border-t border-gray-200 shadow-md md:hidden"
        >
          <div className="flex flex-col space-y-5">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-blue-700 font-semibold" : "text-gray-700"
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/register"
              onClick={() => setOpen(false)}
              className="px-5 py-2 font-semibold text-center text-white bg-blue-700 rounded-full shadow hover:bg-blue-800"
            >
              Register
            </NavLink>
          </div>
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className="px-5 py-2 font-semibold text-center text-blue-700 border border-blue-700 rounded-full shadow hover:bg-blue-700 hover:text-white"
          >
            Login
          </NavLink>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
