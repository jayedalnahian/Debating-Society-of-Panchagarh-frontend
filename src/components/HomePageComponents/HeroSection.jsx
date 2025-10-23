import React, { use } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaAward } from "react-icons/fa";
import useAuth from "../../CustomHooks/UseAuth";

const HeroSection = () => {
  const { user } = useAuth();

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#132440] to-[#0B1120] text-white py-24">
      {/* Decorative gradient blobs */}
      <motion.div
        className="absolute top-1/3 -left-20 w-96 h-96 bg-[#38BDF8]/20 blur-3xl rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#0EA5E9]/20 blur-3xl rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
        {/* LEFT SIDE - Animated Logo & Floating Cards */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Main Logo Container */}
          <div className="relative">
            <motion.img
              src="https://i.ibb.co.com/FLvrMddq/DSP-logo.png"
              alt="Panchagarh Debating Society Logo"
              className="w-64 md:w-80 drop-shadow-[0_0_25px_rgba(56,189,248,0.3)] relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Top Right Card */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute -top-4 -right-4 lg:top-46 lg:-right-20 w-48 lg:w-52 bg-[#1E293B]/90 backdrop-blur-sm p-4 rounded-xl border border-[#2A3F5F] shadow-lg z-20"
            >
              <div className="flex items-center gap-2 mb-1">
                <FaUsers className="text-[#38BDF8]" size={16} />
                <h3 className="font-semibold text-sm">Active Members</h3>
              </div>
              <p className="text-gray-300 text-xs">
                <span className="text-[#38BDF8] font-semibold">500+</span> young
                debaters from Panchagarh.
              </p>
            </motion.div>

            {/* Bottom Left Card */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-8 w-48 lg:w-52 bg-[#1E293B]/90 backdrop-blur-sm p-4 rounded-xl border border-[#2A3F5F] shadow-lg z-20"
            >
              <div className="flex items-center gap-2 mb-1">
                <FaCalendarAlt className="text-[#0EA5E9]" size={16} />
                <h3 className="font-semibold text-sm">Upcoming Events</h3>
              </div>
              <p className="text-gray-300 text-xs">
                Monthly debates, workshops & training sessions.
              </p>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute -bottom-8 right-8 lg:bottom-8 lg:right-4 w-48 lg:w-52 bg-[#1E293B]/90 backdrop-blur-sm p-4 rounded-xl border border-[#2A3F5F] shadow-lg z-20"
            >
              <div className="flex items-center gap-2 mb-1">
                <FaAward className="text-[#38BDF8]" size={16} />
                <h3 className="font-semibold text-sm">Achievements</h3>
              </div>
              <p className="text-gray-300 text-xs">
                District & national-level debate champions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE - Text Content */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Empowering Voices, <br />
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] bg-clip-text text-transparent">
              Inspiring Change
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Welcome to the{" "}
            <span className="font-semibold text-[#38BDF8]">
              Panchagarh Debating Society
            </span>{" "}
            — a platform for young thinkers to speak, challenge ideas, and lead
            the next generation of confident communicators.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            {!user && (
              <motion.a
                href="/register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] text-[#0F172A] font-semibold rounded-full shadow-lg hover:shadow-[#38BDF8]/40 transition-all duration-300 text-center"
              >
                Join Now
              </motion.a>
            )}
            <motion.a
              href="/events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#38BDF8] text-[#38BDF8] font-semibold rounded-full hover:bg-[#38BDF8] hover:text-[#0F172A] transition-all duration-300 text-center"
            >
              Explore Events
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
