import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useAddEvent from "../../../CustomHooks/useAddEvent";
import useGetAllEvents from "../../../CustomHooks/useGetAllEvents";
import useDeleteSingleEvent from "../../../CustomHooks/useDeleteSingleEvent";
import Loading from "../../../components/LoadingPage/Loading";
import useUpdateSingleEvent from "../../../CustomHooks/useUpdateSingleEvent";
const AdminEvents = () => {
  const { mutate: addEvent } = useAddEvent();
  const { data, isLoading } = useGetAllEvents();
  const { mutate: deleteEvent } = useDeleteSingleEvent();
  const { mutate: updateEvent } = useUpdateSingleEvent();

  const [events, setEvents] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (data) {
      setEvents(data);
    }
  }, [data]);

  // 🟢 Add Event
  const handleAddEvent = async (e) => {
    e.preventDefault();
    const form = e.target;
    const eventData = {
      title: form.title.value,
      date: form.date.value,
      location: form.location.value,
      participants: form.participants.value,
      description: form.description.value,
    };
    await addEvent(eventData);
    setShowAddModal(false);
    form.reset();
  };

  // 🔴 Delete Event
  const handleDelete =  (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirmDelete) return;

     deleteEvent(id);
    setEvents(events.filter((e) => e._id !== id));
  };

  // ✏️ Open Edit Modal
  const handleEditClick = (event) => {
    setSelectedEvent(event);
    setShowEditModal(true);
  };

  // 🟡 Submit Edit
  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedEvent = {
      title: form.title.value,
      date: form.date.value,
      location: form.location.value,
      participants: form.participants.value,
      description: form.description.value,
    };

    console.log(updateEvent);

    await updateEvent({ id: selectedEvent._id, updatedEvent });
    setShowEditModal(false);
    setSelectedEvent(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-6 bg-[#F8F9FA] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#2C3E50]">Manage Events</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-[#E67E22] text-white px-4 py-2 rounded-lg hover:bg-[#cf6b1a] transition-colors"
        >
          <FaPlus /> Add Event
        </button>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-[#2C3E50] text-white">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Participants</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, i) => (
              <motion.tr
                key={event._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="border-b hover:bg-gray-100 transition-colors"
              >
                <td className="py-3 px-4">{i + 1}</td>
                <td className="py-3 px-4 font-medium">{event.title}</td>
                <td className="py-3 px-4">{event.date}</td>
                <td className="py-3 px-4">{event.location}</td>
                <td className="py-3 px-4">{event.participants}</td>
                <td className="py-3 px-4 flex justify-center gap-3 text-lg">
                  <button
                    onClick={() => handleEditClick(event)}
                    className="text-[#2980B9] hover:text-blue-700"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🟢 Add Modal */}
      <AnimatePresence>
        {showAddModal && (
          <Modal
            onClose={() => setShowAddModal(false)}
            onSubmit={handleAddEvent}
          />
        )}
      </AnimatePresence>

      {/* ✏️ Edit Modal */}
      <AnimatePresence>
        {showEditModal && selectedEvent && (
          <Modal
            onClose={() => setShowEditModal(false)}
            onSubmit={handleUpdateEvent}
            eventData={selectedEvent}
            isEdit
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// 🔧 Reusable Modal Component (for Add / Edit)
const Modal = ({ onClose, onSubmit, eventData = {}, isEdit = false }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg"
        initial={{ scale: 0.9, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <h2 className="text-xl font-semibold text-[#2C3E50] mb-4">
          {isEdit ? "Edit Event" : "Add New Event"}
        </h2>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="title"
            defaultValue={eventData.title}
            placeholder="Event Title"
            className="border rounded-lg p-2 focus:outline-[#E67E22]"
          />
          <input
            type="date"
            name="date"
            defaultValue={eventData.date}
            className="border rounded-lg p-2 focus:outline-[#E67E22]"
          />
          <input
            type="text"
            name="location"
            defaultValue={eventData.location}
            placeholder="Location"
            className="border rounded-lg p-2 focus:outline-[#E67E22]"
          />
          <input
            type="number"
            name="participants"
            defaultValue={eventData.participants}
            placeholder="Participants"
            className="border rounded-lg p-2 focus:outline-[#E67E22]"
          />
          <textarea
            name="description"
            defaultValue={eventData.description}
            placeholder="Description"
            className="border rounded-lg p-2 h-52 focus:outline-[#E67E22]"
          ></textarea>
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#27AE60] text-white hover:bg-[#1f8c4c]"
          >
            {isEdit ? "Save Changes" : "Add Event"}
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default AdminEvents;
