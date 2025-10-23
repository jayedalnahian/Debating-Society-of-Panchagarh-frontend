import React from "react";
import { NavLink } from "react-router";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const DashboardNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="w-full h-16 bg-[#2C3E50] text-white flex items-center justify-between px-4 shadow-md">
      {/* Left - Logo & Sidebar Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="text-2xl md:hidden hover:text-[#E67E22] transition-colors"
        >
          <MdMenu />
        </button>
        <h1 className="text-xl font-semibold tracking-wide">
          PDS <span className="text-[#E67E22]">Admin</span>
        </h1>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            `hover:text-[#E67E22] transition-colors ${
              isActive ? "text-[#E67E22] font-semibold" : ""
            }`
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="/dashboard/events"
          className={({ isActive }) =>
            `hover:text-[#E67E22] transition-colors ${
              isActive ? "text-[#E67E22] font-semibold" : ""
            }`
          }
        >
          Events
        </NavLink>

        <NavLink
          to="/dashboard/members"
          className={({ isActive }) =>
            `hover:text-[#E67E22] transition-colors ${
              isActive ? "text-[#E67E22] font-semibold" : ""
            }`
          }
        >
          Members
        </NavLink>

        <NavLink
          to="/dashboard/announcements"
          className={({ isActive }) =>
            `hover:text-[#E67E22] transition-colors ${
              isActive ? "text-[#E67E22] font-semibold" : ""
            }`
          }
        >
          Announcements
        </NavLink>

        <NavLink
          to="/dashboard/gallery"
          className={({ isActive }) =>
            `hover:text-[#E67E22] transition-colors ${
              isActive ? "text-[#E67E22] font-semibold" : ""
            }`
          }
        >
          Gallery
        </NavLink>
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
      </div>
    </nav>
  );
};

export default DashboardNavbar;
