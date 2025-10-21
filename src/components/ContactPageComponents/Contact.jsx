import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-[#38BDF8]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have questions, suggestions, or want to collaborate? We’d love to hear from you!
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <FaEnvelope className="text-3xl text-[#38BDF8] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300">info@devconnect.com</p>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <FaPhoneAlt className="text-3xl text-[#38BDF8] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">+880 1234 567890</p>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <FaMapMarkerAlt className="text-3xl text-[#38BDF8] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-300">Dhaka, Bangladesh</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="max-w-3xl mx-auto bg-[#1E293B] p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#0F172A] border border-gray-700 focus:border-[#38BDF8] outline-none text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-[#0F172A] border border-gray-700 focus:border-[#38BDF8] outline-none text-white"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-[#0F172A] border border-gray-700 focus:border-[#38BDF8] outline-none text-white mb-6"
          ></textarea>
          <button
            type="submit"
            className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-12 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#" className="hover:text-[#38BDF8] transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-[#38BDF8] transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-[#38BDF8] transition">
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
