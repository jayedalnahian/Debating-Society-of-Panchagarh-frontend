import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaAward } from "react-icons/fa";

const HeroSection = () => {
  const cardVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

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
    <section className="bg-[#0F172A] text-[#F8FAFC] overflow-hidden relative">
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

      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-[#38BDF8]">
              Welcome to <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] bg-clip-text text-transparent">
                Panchagarh Debating Society
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Empowering young minds through debate, discussion, and dialogue.
              Join passionate students from all over Panchagarh to sharpen your
              public speaking and critical thinking skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.a
                href="/register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] text-[#0F172A] font-semibold rounded-full shadow-lg hover:shadow-[#38BDF8]/40 transition-all duration-300"
              >
                Join Now
              </motion.a>
              <motion.a
                href="/events"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#38BDF8] text-[#38BDF8] font-semibold rounded-full hover:bg-[#38BDF8] hover:text-[#0F172A] transition-all duration-300"
              >
                Explore Events
              </motion.a>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Members Card */}
            <motion.div
              variants={cardVariants}
              animate="animate"
              className="absolute top-0 left-10 md:left-20 w-64 bg-[#1E293B] text-[#F8FAFC] p-6 rounded-2xl shadow-lg border border-[#2A3F5F]"
            >
              <div className="flex items-center mb-3">
                <FaUsers className="text-[#38BDF8] mr-2 text-lg" />
                <h3 className="font-semibold">Active Members</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Over <span className="text-[#38BDF8] font-semibold">500+</span>{" "}
                students engaged in debates and workshops.
              </p>
            </motion.div>

            {/* Events Card */}
            <motion.div
              variants={cardVariants}
              animate="animate"
              className="absolute top-36 right-10 md:right-24 w-56 bg-[#1E293B] text-[#F8FAFC] p-6 rounded-2xl shadow-lg border border-[#2A3F5F]"
            >
              <div className="flex items-center mb-3">
                <FaCalendarAlt className="text-[#0EA5E9] mr-2 text-lg" />
                <h3 className="font-semibold">Upcoming Events</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Monthly debate tournaments and public speaking workshops.
              </p>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              variants={cardVariants}
              animate="animate"
              className="absolute top-72 left-20 md:left-32 w-60 bg-[#1E293B] text-[#F8FAFC] p-6 rounded-2xl shadow-lg border border-[#2A3F5F]"
            >
              <div className="flex items-center mb-3">
                <FaAward className="text-[#38BDF8] mr-2 text-lg" />
                <h3 className="font-semibold">Achievements</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Multiple awards at district and national-level competitions.
              </p>
            </motion.div>

            {/* Spacer to maintain layout height */}
            <div className="w-80 h-96 opacity-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
