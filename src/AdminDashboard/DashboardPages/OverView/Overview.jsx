import React from "react";
import { FaUsers, FaCalendarAlt, FaBullhorn, FaImage } from "react-icons/fa";
import { motion } from "framer-motion";

const Overview = () => {
  // Dummy data
  const stats = [
    { title: "Total Members", value: 124, icon: <FaUsers />, color: "#27AE60" },
    { title: "Total Events", value: 18, icon: <FaCalendarAlt />, color: "#E67E22" },
    { title: "Announcements", value: 5, icon: <FaBullhorn />, color: "#2980B9" },
    { title: "Gallery Images", value: 42, icon: <FaImage />, color: "#8E44AD" },
  ];

  const recentEvents = [
    { name: "Inter-District Debate Fest 2025", date: "Oct 15, 2025", participants: 12 },
    { name: "National Youth Debate", date: "Sep 20, 2025", participants: 8 },
    { name: "Public Speaking Workshop", date: "Aug 12, 2025", participants: 20 },
  ];

  const latestMembers = [
    { name: "Samiha Rahman", role: "Debater" },
    { name: "Md. Fahim Hasan", role: "Organizer" },
    { name: "Arif Hossain", role: "Coach" },
  ];

  return (
    <div className="p-6 bg-[#F8F9FA] min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Dashboard Overview</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 border-t-4"
            style={{ borderColor: item.color }}
          >
            <div
              className="text-3xl p-3 rounded-full text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#2C3E50]">{item.title}</h2>
              <p className="text-2xl font-bold text-gray-700">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Events */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#2C3E50] mb-4">Recent Events</h2>
          <ul className="divide-y divide-gray-200">
            {recentEvents.map((event, i) => (
              <li key={i} className="py-3 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-800">{event.name}</h3>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
                <span className="bg-[#E67E22] text-white text-sm px-3 py-1 rounded-full">
                  {event.participants} Teams
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Members */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#2C3E50] mb-4">Latest Members</h2>
          <ul className="divide-y divide-gray-200">
            {latestMembers.map((member, i) => (
              <li key={i} className="py-3 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
                <span className="text-[#27AE60] font-semibold">Active</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
