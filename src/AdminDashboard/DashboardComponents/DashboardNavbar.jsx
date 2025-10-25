import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

const DashboardNavbar = ( ) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-[#2C3E50] text-white shadow-md relative z-50">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 h-16">
        {/* Left - Logo & Sidebar Toggle */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold tracking-wide">
            PDS <span className="text-[#E67E22]">Admin</span>
          </h1>
        </div>

        {/* Center - Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { path: "/dashboard", label: "Overview" },
            { path: "/dashboard/events", label: "Events" },
            { path: "/dashboard/members", label: "Members" },
            { path: "/dashboard/announcements", label: "Announcements" },
            
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-[#E67E22] transition-colors ${
                  isActive ? "text-[#E67E22] font-semibold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <button className="relative hover:text-[#E67E22] transition-colors">
            <FaBell className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#E67E22] transition-colors">
            <FaUserCircle className="text-2xl" />
            <span className="hidden md:inline text-sm font-medium">Admin</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-2xl md:hidden hover:text-[#E67E22] transition-colors"
            onClick={handleToggleMenu}
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-[#34495E] border-t border-[#E67E22]/30 px-4 py-3 space-y-3">
          {[
            { path: "/dashboard/overview", label: "Overview" },
            { path: "/dashboard/events", label: "Events" },
            { path: "/dashboard/members", label: "Members" },
            { path: "/dashboard/announcements", label: "Announcements" },
           
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-2 py-1 rounded-md transition-colors ${
                  isActive
                    ? "text-[#E67E22] font-semibold bg-[#2C3E50]"
                    : "hover:text-[#E67E22]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
