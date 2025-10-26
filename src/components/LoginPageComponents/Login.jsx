import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa";
import useLogin from "../../CustomHooks/useLogin";
import useAuth from "../../CustomHooks/UseAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isLoading } = useLogin();
  const { googleLogin } = useAuth();
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form[0].value;
    const password = form[1].value;
    mutate({ email, password });
    form.reset();
  };

  const handleGoogleLogin = async () => {
    await googleLogin();
    alert("User logged in successfully!");
  
    navigate("/");
    
    
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#132440] via-[#16476A] to-[#3B9797] text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
      >
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#BF092F]">
          Welcome Back
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Login to your account and join the debate!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Email Address
            </label>
            <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-300 mr-2" />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Password
            </label>
            <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
              <FaLock className="text-gray-300 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-gray-400 hover:text-gray-200 ml-2"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          
          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#BF092F] to-[#16476A] hover:from-[#16476A] hover:to-[#3B9797] transition-all duration-300 shadow-lg"
          >
            {isLoading ? "Logging in..." : " Login"}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="px-3 text-gray-300 text-sm">or</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Social Login Placeholder */}
        <div onClick={handleGoogleLogin} className="text-center flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center items-center gap-3 p-3 rounded-lg font-semibold text-[#132440] bg-white hover:bg-gray-200 transition-all duration-300"
          >
            <span><FaGoogle /></span>Continue with Google
          </motion.button>
        </div>

        {/* Register Link */}
        <p className="text-center text-gray-300 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-black hover:text-[#BF092F] font-semibold"
          >
            Register Now
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
