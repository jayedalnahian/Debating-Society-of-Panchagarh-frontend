import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes } from "react-icons/fa"; // 👈 React Icons

const eventsData = [
  {
    id: 1,
    title: "District Debate Championship 2025",
    date: "March 15, 2025",
    location: "Panchagarh Government Auditorium",
    description:
      "A grand annual debate competition where schools and colleges from all over Panchagarh compete. This event encourages critical thinking and confidence among young debaters.",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Public Speaking Workshop",
    date: "April 5, 2025",
    location: "Panchagarh Polytechnic Institute",
    description:
      "An intensive workshop to enhance public speaking, articulation, and stage presence — led by experienced mentors and past debate champions.",
    image:
      "https://images.unsplash.com/photo-1584697964351-c8c3e09f5f49?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Inter-College Friendly Debate",
    date: "May 20, 2025",
    location: "Panchagarh Town Hall",
    description:
      "A friendly competition between local colleges to promote collaboration and learning. Topics are focused on youth development and global awareness.",
    image:
      "https://images.unsplash.com/photo-1515165562835-c4c7b05b0a70?auto=format&fit=crop&w=800&q=80",
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-20 px-6 md:px-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary"
      >
        Upcoming Events
      </motion.h1>

      {/* Events Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {eventsData.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-primary">
                {event.title}
              </h2>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaCalendarAlt className="text-primary" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-accent" />
                <span>{event.location}</span>
              </div>

              <p className="text-gray-300">
                {event.description.slice(0, 90)}...
              </p>
              <button
                onClick={() => setSelectedEvent(event)}
                className="mt-3 bg-primary hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-xl max-w-lg text-center relative"
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
            >
              <FaTimes />
            </button>

            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h2 className="text-3xl font-bold mb-2 text-primary">
              {selectedEvent.title}
            </h2>

            <div className="flex justify-center items-center gap-3 text-gray-400 mb-2 text-sm">
              <FaCalendarAlt className="text-primary" />
              <span>{selectedEvent.date}</span>
              <FaMapMarkerAlt className="text-accent" />
              <span>{selectedEvent.location}</span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              {selectedEvent.description}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Events;
