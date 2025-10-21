import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#132440] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="flex-shrink-0 lg:hidden">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
                className="focus:outline-none text-white"
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
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="ml-4 lg:ml-0 text-xl font-bold text-white"
            >
              Panchagarh Debating Society
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex ml-10 space-x-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-teal-400 font-bold"
                      : "text-white hover:text-teal-400 font-semibold"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Register button */}
          <div className="hidden lg:block">
            <Link
              to="/register"
              className="bg-gradient-to-r from-[#BF092F] to-[#16476A] hover:from-[#16476A] hover:to-[#3B9797] text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Register
            </Link>
          </div>

          {/* Mobile Register button */}
          <div className="lg:hidden">
            <Link
              to="/register"
              className="bg-gradient-to-r from-teal-600 to-[#16476A] hover:from-[#16476A] hover:to-[#3B9797] text-white font-semibold py-2 px-4 rounded-md text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden shadow-xl bg-[#16476A]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-teal-400 font-bold bg-white/10"
                      : "text-white hover:text-teal-400 hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;