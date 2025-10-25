import React, { useState } from "react";
import useGetAllAnnouncement from "../../../CustomHooks/useGetAllAnnouncement";
import useAddAnnouncement from "../../../CustomHooks/useAddAnnouncement";
import useDeleteAnnouncement from "../../../CustomHooks/useDeleteAnnouncement";
import useUpdateAnnouncement from "../../../CustomHooks/useUpdateAnnouncement";
import Loading from "../../../components/LoadingPage/Loading";

const Announcements = () => {
  const { data: announcements, isLoading } = useGetAllAnnouncement();
  const { mutate: addAnnouncement } = useAddAnnouncement();
  const { deleteAnnouncement } = useDeleteAnnouncement();
  const { updateAnnouncement } = useUpdateAnnouncement();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
  });

  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  // 🧩 Handle Add
  const handleAdd = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      ...formData,
      date: formData.date || new Date().toISOString(),
    };
    addAnnouncement(newAnnouncement);
    setFormData({ title: "", author: "", date: "", content: "" });
    setIsAddModalOpen(false);
  };

  // 🧩 Handle Edit
  const handleEdit = (announcement) => {
    setSelectedAnnouncement(announcement);
    setFormData({
      title: announcement.title,
      author: announcement.author,
      date: announcement.date ? announcement.date.split("T")[0] : "",
      content: announcement.content,
    });
    setIsEditModalOpen(true);
  };

  // 🧩 Handle Update Submit
  const handleUpdate = (e) => {
    e.preventDefault();
    updateAnnouncement({
      id: selectedAnnouncement._id,
      updatedData: {
        title: formData.title,
        author: formData.author,
        date: formData.date,
        content: formData.content,
      },
    });
    setIsEditModalOpen(false);
    setSelectedAnnouncement(null);
  };

  // 🧩 Handle Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      deleteAnnouncement(id);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#0056D2] text-white px-4 py-2 rounded-lg hover:bg-[#0041A8] transition"
        >
          + New Announcement
        </button>
      </div>

      {/* Announcements List */}
      {announcements?.length === 0 ? (
        <p className="text-gray-500 text-center">No announcements available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements?.map((a) => (
            <div
              key={a._id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#0056D2] mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {new Date(a.date).toLocaleDateString("en-BD", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  • {a.author}
                </p>
                <p className="text-gray-700 text-sm">{a.content}</p>
              </div>

              {/* Actions */}
              <div className="flex justify-end mt-4 gap-3">
                <button
                  onClick={() => handleEdit(a)}
                  className="px-3 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(a._id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🧾 Add Announcement Modal */}
      {isAddModalOpen && (
        <Modal
          title="Add New Announcement"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleAdd}
          onClose={() => setIsAddModalOpen(false)}
          submitLabel="Add"
        />
      )}

      {/* ✏️ Edit Announcement Modal */}
      {isEditModalOpen && (
        <Modal
          title="Edit Announcement"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleUpdate}
          onClose={() => setIsEditModalOpen(false)}
          submitLabel="Update"
        />
      )}
    </div>
  );
};

export default Announcements;

//
// 🔧 Reusable Modal Component
//
const Modal = ({ title, formData, setFormData, onSubmit, onClose, submitLabel }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-600 mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            placeholder="Enter title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-gray-600 mb-1">Author</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            required
            placeholder="Enter author name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-600 mb-1">Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-gray-600 mb-1">Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            required
            rows="5"
            placeholder="Write details here..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#0056D2] text-white rounded-lg hover:bg-[#0041A8]"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  </div>
);
