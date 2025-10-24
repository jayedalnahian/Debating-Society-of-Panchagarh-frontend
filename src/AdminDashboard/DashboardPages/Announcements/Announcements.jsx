import React, { useState } from "react";

const Announcements = () => {
  const [announcements] = useState([
    {
      id: 1,
      title: "Upcoming Inter-District Debate Championship 2025",
      date: "Oct 15, 2025",
      author: "Admin - Jayed Al Nahian",
      content:
        "We are thrilled to announce that the Inter-District Debate Championship 2025 will be held in November. Registration will open soon!",
    },
    {
      id: 2,
      title: "Weekly Debate Practice Session",
      date: "Oct 10, 2025",
      author: "Coach - Sadia Rahman",
      content:
        "All members are requested to join the weekly debate practice session at Panchagarh Government College Auditorium every Friday at 4:00 PM.",
    },
    {
      id: 3,
      title: "New Members Orientation Program",
      date: "Sep 28, 2025",
      author: "Secretary - Arif Hasan",
      content:
        "Our new member orientation program was a great success! Thank you to everyone who helped organize the event.",
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
        <button className="bg-[#0056D2] text-white px-4 py-2 rounded-lg hover:bg-[#0041A8] transition">
          + New Announcement
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {announcements.map((a) => (
          <div
            key={a.id}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-[#0056D2] mb-2">
              {a.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              {a.date} • {a.author}
            </p>
            <p className="text-gray-700 text-sm">{a.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
