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
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-[#F8FAFC] min-h-screen py-20">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38BDF8] opacity-20 rounded-full blur-3xl"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0EA5E9] opacity-20 rounded-full blur-3xl"
        variants={blobVariants}
        animate="animate"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8 space-y-20">
        {/* About Intro */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#38BDF8]">
            About Panchagarh Debating Society
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We are a vibrant community of students in Panchagarh, dedicated to
            enhancing debating, public speaking, and leadership skills. Our
            mission is to empower voices and minds through healthy discussions,
            competitions, and collaborative learning.
          </p>
        </motion.section>

        {/* Mission & History */}
        <motion.section
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="bg-[#1E293B] p-8 rounded-2xl shadow-xl border border-[#2A3F5F]">
            <h2 className="text-3xl font-semibold mb-4 text-[#38BDF8]">
              Our Mission
            </h2>
            <p className="text-gray-300">
              To nurture critical thinking, effective communication, and
              leadership among students through structured debates, training
              sessions, and inter-school competitions.
            </p>
          </motion.div>

          <motion.div className="bg-[#1E293B] p-8 rounded-2xl shadow-xl border border-[#2A3F5F]">
            <h2 className="text-3xl font-semibold mb-4 text-[#38BDF8]">
              Our History
            </h2>
            <p className="text-gray-300">
              Founded in 2015, the Panchagarh Debating Society began with a few
              passionate speakers and now stands as a symbol of youth leadership
              and excellence in communication across the district.
            </p>
          </motion.div>
        </motion.section>

        {/* Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center text-[#38BDF8]">
            Meet Our Main Members
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="bg-[#1E293B] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg border border-[#2A3F5F] hover:border-[#38BDF8] transition"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-[#0F172A]"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#38BDF8] font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex space-x-4 mt-auto">
                  {member.socials.linkedin && (
                    <motion.a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#38BDF8]/10 p-2 rounded-full hover:bg-[#38BDF8]/20 transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaLinkedin size={18} className="text-[#38BDF8]" />
                    </motion.a>
                  )}
                  {member.socials.facebook && (
                    <motion.a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#38BDF8]/10 p-2 rounded-full hover:bg-[#38BDF8]/20 transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaFacebook size={18} className="text-[#38BDF8]" />
                    </motion.a>
                  )}
                  {member.socials.twitter && (
                    <motion.a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#38BDF8]/10 p-2 rounded-full hover:bg-[#38BDF8]/20 transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaTwitter size={18} className="text-[#38BDF8]" />
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
