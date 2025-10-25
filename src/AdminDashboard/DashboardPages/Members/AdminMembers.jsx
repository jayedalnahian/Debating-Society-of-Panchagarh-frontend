import React, { useState } from "react";
import useGetAllUsers from "../../../CustomHooks/useGetAllUsers";
import Loading from "../../../components/LoadingPage/Loading";
import { FaEdit, FaTrash } from "react-icons/fa";
import useEditUserData from "../../../CustomHooks/useEditUserData";

const AdminMembers = () => {
  const { data: members, isLoading } = useGetAllUsers();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { mutate: editUserData } = useEditUserData();

  const [editForm, setEditForm] = useState({
    _id: "",
    name: "",
    role: "",
    email: "",
    facebookAccount: "",
    description: "",
  });

  const editTime = (isoTime) => {
    const date = new Date(isoTime);
    return date.toLocaleString("en-BD", {
      timeZone: "Asia/Dhaka",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  // ✏️ Edit member handler
  const handleEditMember = (member) => {
    setEditForm({
      _id: member._id,
      name: member.name,
      role: member.role,
      email: member.email || "",
      facebookAccount: member.facebookAccount || "",
      description: member?.description || "",
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log("Updated member data:", editForm);
    editUserData(editForm);

    setIsEditModalOpen(false);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Members</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-[#0056D2] text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Join Date</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members?.map((member) => (
              <tr
                key={member._id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="py-3 px-6 font-medium text-gray-700">
                  {member.name}
                </td>
                <td className="py-3 px-6 text-gray-600">{member.role}</td>
                <td name="" className=" px-2 py-1 text-gray-600 w-52" id="">
                  {member?.description}
                </td>
                <td className="py-3 px-6 text-gray-500">
                  {editTime(member.joinDate)}
                </td>
                <td className="py-3 px-6 text-center flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleEditMember(member)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✏️ Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Edit Member Information
            </h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                />
              </div>
              {/* Facebook account link */}
              <div>
                <label className="block text-gray-600 mb-1">Facebook Account Link</label>
                <input
                  type="link"
                  value={editForm.facebookAccount || ""}
                  onChange={(e) =>
                    setEditForm({ ...editForm, facebookAccount: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                />
              </div>


              {/* Email */}
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={editForm.email || ""}
                  onChange={(e) =>
                    setEditForm({ ...editForm, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-600 mb-1">Description</label>
                <textarea
                  value={editForm?.description || ""}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                  rows="5"
                  placeholder="Write a short bio or description..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                ></textarea>
              </div>

              {/* Role */}
              <div>
                <label className="block text-gray-600 mb-1">Role</label>
                <select
                  value={editForm.role}
                  onChange={(e) =>
                    setEditForm({ ...editForm, role: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                >
                  <option value="member">Member</option>
                  <option value="advisor">Advisor</option>
                  <option value="general-secretary">General Secretary</option>
                  <option value="joint-general-secretary">
                    Joint General Secretary
                  </option>
                  <option value="organizational-secretary">
                    Organizational Secretary
                  </option>
                  <option value="publication-secretary">
                    Publication Secretary
                  </option>
                  <option value="debater">
                    Debater
                  </option>
                  <option value="publicity-secretary">
                    Publicity Secretary
                  </option>
                  <option value="workshop-affairs-secretary">
                    Workshop Affairs Secretary
                  </option>
                  <option value="program-affairs-secretary">
                    Program Affairs Secretary
                  </option>
                  <option value="finance-secretary">Finance Secretary</option>
                  <option value="it-secretary">IT Secretary</option>
                  <option value="curriculum-affairs-secretary">
                    Curriculum Affairs Secretary
                  </option>
                  <option value="debate-affairs-secretary">
                    Debate Affairs Secretary
                  </option>
                  <option value="president">President</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0056D2] text-white rounded-lg hover:bg-[#0041A8]"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMembers;
