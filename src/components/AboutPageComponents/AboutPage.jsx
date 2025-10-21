import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

// Example data for main members
const members = [
  {
    name: "Alice Rahman",
    role: "President",
    image: "https://i.ibb.co.com/4RRT6zMd/profile-pic.jpg",
    bio: "Passionate about public speaking and debate coaching. Leads our society with dedication.",
    socials: {
      linkedin: "https://linkedin.com/in/alice",
      facebook: "https://facebook.com/alice",
      twitter: "https://twitter.com/alice",
    },
  },
  {
    name: "Bob Hossain",
    role: "Vice President",
    image: "https://i.ibb.co.com/4RRT6zMd/profile-pic.jpg",
    bio: "Organizes events and competitions, helping students refine their debating skills.",
    socials: {
      linkedin: "https://linkedin.com/in/bob",
      facebook: "https://facebook.com/bob",
      twitter: "https://twitter.com/bob",
    },
  },
  {
    name: "Carla Akter",
    role: "Secretary",
    image: "https://i.ibb.co.com/4RRT6zMd/profile-pic.jpg",
    bio: "Manages communications, registrations, and student memberships efficiently.",
    socials: {
      linkedin: "https://linkedin.com/in/carla",
      facebook: "https://facebook.com/carla",
      twitter: "https://twitter.com/carla",
    },
  },
  {
    name: "David Karim",
    role: "Treasurer",
    image: "https://i.ibb.co.com/4RRT6zMd/profile-pic.jpg",
    bio: "Handles finances and budgeting for all society events and programs.",
    socials: {
      linkedin: "https://linkedin.com/in/david",
      facebook: "https://facebook.com/david",
      twitter: "https://twitter.com/david",
    },
  },
];

const AboutPage = () => {
  const blobVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative overflow-hidden  text-black min-h-screen py-20">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-600 to-[#16476A] opacity-20 rounded-full blur-3xl"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#3B9797] to-teal-600 opacity-15 rounded-full blur-3xl"
        variants={blobVariants}
        animate="animate"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8 space-y-16">
        {/* About Intro */}
        <motion.section
          className="relative py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background blobs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96  bg-gradient-to-r from-[#BF092F] to-[#16476A] opacity-20 rounded-full blur-xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 bg-gradient-to-r from-[#3B9797] to-[#BF092F] opacity-15 rounded-full blur-3xl"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              About Panchagarh Debating Society
            </h1>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
              We are a vibrant student community in Panchagarh dedicated to
              enhancing debating, public speaking, and leadership skills. Our
              members actively participate in district-wide events and
              workshops.
            </p>
          </div>
        </motion.section>

        {/* Mission & History */}
        <motion.section className="relative py-20 overflow-hidden">
          {/* Background blobs */}
          <motion.div
            className="absolute top-1/3 left-1/3 w-72 bg-gradient-to-r from-[#16476A] to-[#3B9797] opacity-15 rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-72 bg-gradient-to-r from-[#BF092F] to-[#16476A] opacity-20 rounded-full blur-3xl"
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border"
            >
              <h2 className="text-3xl font-semibold mb-4 text-primary">
                Our Mission
              </h2>
              <p className="text-gray-800">
                To nurture critical thinking, effective communication, and
                leadership skills among students through debates, workshops, and
                competitions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border"
            >
              <h2 className="text-3xl font-semibold mb-4 text-accent">
                Our History
              </h2>
              <p className="text-gray-800">
                Established in 2015, the society has grown into a dynamic
                platform empowering students across Panchagarh to excel in
                debating and public speaking.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Members */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
            Meet Our Main Members
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#16476A] to-[#0D2D44] rounded-2xl p-6 flex flex-col items-center text-center shadow-xl border border-[#2A618C] relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-300"></div>

                {/* Image container with better styling */}
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                </div>

                {/* Text content */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-cyan-300 font-medium mb-2 px-3 py-1 bg-[#1E5A82] rounded-full text-sm">
                  {member.role}
                </p>
                <p className="text-gray-200 text-sm mb-6 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                {/* Social icons */}
                <div className="flex space-x-4 mt-auto">
                  {member.socials.linkedin && (
                    <motion.a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors shadow-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin size={18} className="text-blue-700" />
                    </motion.a>
                  )}
                  {member.socials.facebook && (
                    <motion.a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors shadow-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaFacebook size={18} className="text-blue-600" />
                    </motion.a>
                  )}
                  {member.socials.twitter && (
                    <motion.a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors shadow-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaTwitter size={18} className="text-blue-400" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
