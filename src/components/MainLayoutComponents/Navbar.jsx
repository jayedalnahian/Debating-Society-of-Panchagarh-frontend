import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-grey-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="flex-shrink-0 lg:hidden">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
                className={`focus:outline-none ${
                  isScrolled ? "text-gray-800" : "text-gray-900"
                }`}
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
              className={`ml-4 lg:ml-0 text-xl font-bold transition-colors duration-200 ${
                isScrolled ? "text-gray-900" : "text-black"
              }`}
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
                      ? "text-teal-600 font-extrabold"
                      : isScrolled
                      ? "text-gray-900 hover:text-teal-600"
                      : "text-black hover:text-teal-400 font-semibold"
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
              className="bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Register button */}
          <div className="lg:hidden">
            <Link
              to="/register"
              className="bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden shadow-lg ${
            isScrolled ? "bg-white" : "bg-gray-800"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-teal-600 font-bold bg-teal-100"
                      : isScrolled
                      ? "text-gray-900 hover:text-teal-600 hover:bg-teal-50"
                      : "text-white hover:text-teal-400 hover:bg-gray-700"
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
