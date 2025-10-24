import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F9FA] text-center">
      {/* PDS Logo Circle Animation */}
      <motion.div
        className="w-20 h-20 rounded-full border-4 border-t-[#E67E22] border-[#0056D2]"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      ></motion.div>

      {/* Text */}
      <motion.h2
        className="mt-6 text-xl font-semibold text-gray-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Loading <span className="text-[#0056D2]">PDS</span> Dashboard...
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-gray-500 text-sm mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Please wait a moment ✨
      </motion.p>
    </div>
  );
};

export default Loading;
