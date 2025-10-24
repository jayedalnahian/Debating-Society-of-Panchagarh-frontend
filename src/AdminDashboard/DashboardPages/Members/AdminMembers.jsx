import React from "react";
import useGetAllUsers from "../../../CustomHooks/useGetAllUsers";
import Loading from "../../../components/LoadingPage/Loading";

const AdminMembers = () => {
  const { data: members, isLoading } = useGetAllUsers();
  console.log(members);

  const editTime = (isoTime) => {
    const date = new Date(isoTime);
    const readable = date.toLocaleString("en-BD", {
      timeZone: "Asia/Dhaka",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    return readable;
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Members</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-[#0056D2] text-white">
            <tr>
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
                <td className="py-3 px-6 font-medium text-gray-700">
                  {member.name}
                </td>
                <td className="py-3 px-6 text-gray-600">{member.role}</td>
                <td className="py-3 px-6 text-gray-500">{member.email}</td>
                <td className="py-3 px-6 text-gray-500">{editTime(member.joinDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMembers;
