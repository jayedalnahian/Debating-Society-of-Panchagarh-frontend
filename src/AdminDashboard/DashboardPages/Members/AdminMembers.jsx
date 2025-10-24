import React from "react";

const AdminMembers = () => {
  const members = [
    {
      id: 1,
      name: "Jayed Al Nahian",
      role: "President",
      email: "jnahian752@gmail.com",
      joinDate: "Jan 2024",
      photo: "https://i.ibb.co/6Xg0h6Y/profile1.jpg",
    },
    {
      id: 2,
      name: "Sadia Rahman",
      role: "Vice President",
      email: "sadia.rahman@example.com",
      joinDate: "Feb 2024",
      photo: "https://i.ibb.co/xz6VJmL/profile2.jpg",
    },
    {
      id: 3,
      name: "Arif Hasan",
      role: "General Secretary",
      email: "arif.hasan@example.com",
      joinDate: "Mar 2024",
      photo: "https://i.ibb.co/6FkZGBH/profile3.jpg",
    },
    {
      id: 4,
      name: "Ritu Akter",
      role: "Executive Member",
      email: "ritu.akter@example.com",
      joinDate: "Apr 2024",
      photo: "https://i.ibb.co/Trb4L7Z/profile4.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Members</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-[#0056D2] text-white">
            <tr>
              <th className="py-3 px-6 text-left">Photo</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Join Date</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr
                key={member.id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="py-3 px-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-6 font-medium text-gray-700">
                  {member.name}
                </td>
                <td className="py-3 px-6 text-gray-600">{member.role}</td>
                <td className="py-3 px-6 text-gray-500">{member.email}</td>
                <td className="py-3 px-6 text-gray-500">{member.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMembers;
