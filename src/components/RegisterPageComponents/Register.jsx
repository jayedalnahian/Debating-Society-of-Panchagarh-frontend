import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from "../../CustomHooks/UseAuth";
import usePostUserData from "../../CustomHooks/usePostUserData";

const Register = () => {
  
  const { mutate, isLoading} = usePostUserData();
  const { userLoading } = useAuth();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value;
    const email = form[1].value;
    const password = form[2].value;
    const confirmPassword = form[3].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    } else {
        mutate({name, email, password});
        form.reset();
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-900 via-gray-900 to-black text-white flex items-center justify-center px-4 py-12">
      <motion.div
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full border border-white/20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-teal-400">
          Create an Account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Full Name
            </label>
            <div className="flex items-center bg-white/10 rounded-lg px-3">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent w-full py-2 outline-none text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email Address
            </label>
            <div className="flex items-center bg-white/10 rounded-lg px-3">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent w-full py-2 outline-none text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="flex items-center bg-white/10 rounded-lg px-3">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter password"
                className="bg-transparent w-full py-2 outline-none text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <div className="flex items-center bg-white/10 rounded-lg px-3">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Confirm password"
                className="bg-transparent w-full py-2 outline-none text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-semibold transition"
          >
            {isLoading && userLoading ? "Registering..." : " Register"}
          </motion.button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-gray-400 mt-5 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-400 hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Register;
