import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaAward } from "react-icons/fa";

const HeroSection = () => {
  const cardVariants = {
    animate: {
      y: [0, -15, 0],
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
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="bg-dark text-white overflow-hidden relative">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary to-accent opacity-20 rounded-full blur-3xl"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent to-secondary opacity-15 rounded-full blur-3xl"
        variants={blobVariants}
        animate="animate"
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl text-black lg:text-6xl font-bold leading-tight mb-6">
              Welcome to Panchagarh
              <br />
              Debating Society
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Join students from all over Panchagarh district, participate in debates,
              improve your public speaking skills, and showcase your talent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="/register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary text-teal-600 hover:bg-teal-600 hover:text-black rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Register Now
              </motion.a>
              <motion.a
                href="/events"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 text-primary text-teal-600 hover:bg-teal-600 hover:text-black border-primary text-primary rounded-full font-semibold hover:bg-primary font-bold transition-all duration-300"
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
              className="absolute top-0 left-10 md:left-20 w-64 bg-white  text-black p-6 rounded-2xl shadow-xl z-30"
            >
              <div className="flex items-center mb-4">
                <FaUsers className="text-primary mr-2" />
                <h3 className="font-semibold">Members</h3>
              </div>
              <p className="text-sm text-gray-600">Over 500 students actively participate</p>
            </motion.div>

            {/* Events Card */}
            <motion.div
              variants={cardVariants}
              animate="animate"
              className="absolute top-32 right-10 md:right-20 w-56 bg-white text-black p-6 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-secondary mr-2" />
                <h3 className="font-semibold">Events</h3>
              </div>
              <p className="text-sm text-gray-600">
                Regular debate competitions and workshops every month
              </p>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              variants={cardVariants}
              animate="animate"
              className="absolute top-64 left-20 md:left-32 w-60 bg-white text-black p-6 rounded-2xl shadow-xl z-10"
            >
              <div className="flex items-center mb-4">
                <FaAward className="text-accent mr-2" />
                <h3 className="font-semibold">Achievements</h3>
              </div>
              <p className="text-sm text-gray-600">
                Numerous awards and recognitions at district and national level
              </p>
            </motion.div>

            <div className="w-80 h-96 opacity-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
