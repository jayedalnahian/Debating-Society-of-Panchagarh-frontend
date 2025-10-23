import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🔒 Temporary state — replace later with Firebase Auth state
  const user = null; // if logged in -> use { displayName, photoURL, etc. }

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/members", label: "Members" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#132440]/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and mobile button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              className="lg:hidden text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center ml-4 lg:ml-0"
            >
              <img className="w-15 h-14" src="https://i.ibb.co.com/Jjb2PqDF/DSP-logo.png" alt="" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#3B9797] font-bold"
                      : "text-gray-200 hover:text-[#BF092F]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <button className="flex items-center gap-2 text-gray-200 hover:text-white transition-all">
                <FaUserCircle className="text-xl" />
                <span>{user.displayName || "Profile"}</span>
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-md border-2 border-[#3B9797] text-[#3B9797] font-semibold hover:bg-[#3B9797] hover:text-white transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 rounded-md bg-gradient-to-r from-[#BF092F] to-[#16476A] text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#16476A] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#BF092F] text-white font-bold"
                      : "text-gray-200 hover:bg-[#3B9797]/20 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="flex flex-col items-center gap-3 mt-3 pb-3">
              {user ? (
                <button className="flex items-center gap-2 text-white">
                  <FaUserCircle className="text-xl" />
                  <span>{user.displayName || "Profile"}</span>
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-3/4 text-center border-2 border-[#3B9797] text-[#3B9797] py-2 rounded-md font-semibold hover:bg-[#3B9797] hover:text-white transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-3/4 text-center bg-gradient-to-r from-[#BF092F] to-[#16476A] text-white py-2 rounded-md font-semibold hover:opacity-90 transition-all"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
