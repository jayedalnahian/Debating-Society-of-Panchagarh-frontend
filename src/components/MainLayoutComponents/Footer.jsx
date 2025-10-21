import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-dark bg-gray-900 text-white py-12 z-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Panchagarh Debating Society</h3>
            <p className="text-gray-300">
              A community for students to enhance their debating and public speaking skills,
              participate in events, and achieve excellence together.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/members" className="hover:text-primary transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">Email: info@pds.com</p>
            <p className="text-gray-300 mb-4">Phone: +880 1234 567890</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:info@pds.com"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Panchagarh Debating Society. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
