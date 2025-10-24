import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useAddEvent from "../../../CustomHooks/useAddEvent";
import useGetAllEvents from "../../../CustomHooks/useGetAllEvents";
import Loading from "../../../components/LoadingPage/Loading";

const AdminEvents = () => {
  const { mutate } = useAddEvent();
  const { data, isLoading } = useGetAllEvents();
  console.log(data);

  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (data) {
      setEvents(data);
    }
  }, [data]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const eventData = {
      title: form.title.value,
      date: form.date.value,
      location: form.location.value,
      participants: form.participants.value,
      description: form.description.value,
    };
    mutate(eventData);
    setEvents([...events, { id: Date.now(), ...eventData }]);
    setShowModal(false);
    form.reset();
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-6 bg-[#F8F9FA] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#2C3E50]">Manage Events</h1>
        <button
          onClick={() => setShowModal(true)}
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
                  <button className="text-[#2980B9] hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
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

      {/* Add Event Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.form
              className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg"
              onSubmit={handleAddEvent}
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <h2 className="text-xl font-semibold text-[#2C3E50] mb-4">
                Add New Event
              </h2>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Event Title"
                  name="title"
                  className="border rounded-lg p-2 focus:outline-[#E67E22]"
                />
                <input
                  type="date"
                  name="date"
                  className="border rounded-lg p-2 focus:outline-[#E67E22]"
                />
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  className="border rounded-lg p-2 focus:outline-[#E67E22]"
                />
                <input
                  type="number"
                  placeholder="Participants"
                  name="participants"
                  className="border rounded-lg p-2 focus:outline-[#E67E22]"
                />
                <textarea
                  placeholder="Description"
                  name="description"
                  className="border rounded-lg p-2 h-52 focus:outline-[#E67E22]"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 mt-5">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#27AE60] text-white hover:bg-[#1f8c4c]"
                >
                  Add Event
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminEvents;
