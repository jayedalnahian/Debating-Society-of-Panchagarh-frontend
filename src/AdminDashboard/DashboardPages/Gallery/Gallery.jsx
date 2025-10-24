import React, { useState } from "react";

const Gallery = () => {
  const [images] = useState([
    {
      id: 1,
      title: "District Debate 2025 Finals",
      url: "https://images.unsplash.com/photo-1600880292089-90e6a4e1b2ee",
    },
    {
      id: 2,
      title: "Weekly Practice Session",
      url: "https://images.unsplash.com/photo-1573164713347-df1e0a3e1d3f",
    },
    {
      id: 3,
      title: "Team Meeting at College",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 4,
      title: "National Debate Workshop",
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    },
    {
      id: 5,
      title: "Orientation Day for New Members",
      url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    },
    {
      id: 6,
      title: "Award Ceremony 2024",
      url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
    },
  ]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gallery</h2>
        <button className="bg-[#0056D2] text-white px-4 py-2 rounded-lg hover:bg-[#0041A8] transition">
          + Upload Image
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative group overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-center px-2">
              <p className="font-medium">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
