import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

const membersData = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "President",
    bio: "Rahim leads the society with passion and vision. He focuses on empowering young debaters and organizing impactful events across the district.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80",
    email: "rahim.ahmed@example.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Sumaiya Akter",
    role: "Vice President",
    bio: "Sumaiya is known for her logical arguments and leadership in managing large inter-school debate competitions.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    email: "sumaiya.akter@example.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Tareq Islam",
    role: "General Secretary",
    bio: "Tareq oversees the administration and ensures smooth communication among members and organizing committees.",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
    email: "tareq.islam@example.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    role: "Event Coordinator",
    bio: "Nusrat handles event planning and stage management, ensuring every debate and workshop runs perfectly.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
    email: "nusrat.jahan@example.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Sakib Hasan",
    role: "Public Relations Officer",
    bio: "Sakib manages outreach and publicity, helping the society build strong relationships with schools and media.",
    image:
      "https://images.unsplash.com/photo-1590080875831-4d27b48ff24e?auto=format&fit=crop&w=800&q=80",
    email: "sakib.hasan@example.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
];

const Members = () => {
  return (
    <div className="bg-linear-to-b from-gray-900 to-gray-950 text-white py-20 px-6 md:px-20">
      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-primary"
      >
        Our Core Members
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-300 max-w-3xl mx-auto mb-16"
      >
        Meet the dedicated team behind the Panchagarh Debating Society. 
        These members work tirelessly to organize events, mentor students, 
        and inspire the next generation of speakers and thinkers.
      </motion.p>

      {/* Members Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {membersData.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-primary"
            />
            <h2 className="text-2xl font-semibold text-primary mb-1">
              {member.name}
            </h2>
            <p className="text-accent font-medium mb-3">{member.role}</p>
            <p className="text-gray-300 text-sm mb-4">{member.bio}</p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 text-gray-400">
              <a
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaEnvelope />
              </a>
              <a
                href={member.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Members;
