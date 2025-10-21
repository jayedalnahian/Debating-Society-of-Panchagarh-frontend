import { motion } from "framer-motion";
import { FaBook, FaYoutube, FaFilePdf, FaMicrophoneAlt } from "react-icons/fa";

const resources = [
  {
    id: 1,
    title: "Debate Formats Explained",
    description:
      "Learn the structure and rules of British Parliamentary, Asian Parliamentary, and Lincoln-Douglas debate formats.",
    icon: <FaBook className="text-4xl text-primary" />,
    link: "https://www.idebate.org/debatabase",
    type: "Article",
  },
  {
    id: 2,
    title: "Public Speaking Mastery",
    description:
      "A collection of videos and lectures to help you improve your voice control, confidence, and stage presence.",
    icon: <FaMicrophoneAlt className="text-4xl text-accent" />,
    link: "https://www.youtube.com/watch?v=tShavGuo0_E",
    type: "Video",
  },
  {
    id: 3,
    title: "Official Debate Rulebook (PDF)",
    description:
      "Download our official guideline that includes judging criteria, timing, and scoring systems used in tournaments.",
    icon: <FaFilePdf className="text-4xl text-secondary" />,
    link: "/debate-rulebook.pdf",
    type: "Download",
  },
  {
    id: 4,
    title: "Famous Debate Performances",
    description:
      "Watch some of the most powerful and educational debate speeches from world tournaments.",
    icon: <FaYoutube className="text-4xl text-red-500" />,
    link: "https://www.youtube.com/results?search_query=world+school+debate",
    type: "Video",
  },
];

const Resources = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-20 px-6 md:px-20">
      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-8"
      >
        Debate Learning Resources
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-300 max-w-3xl mx-auto mb-16"
      >
        Explore curated materials to strengthen your debating, speaking, and
        analytical skills. From format guides to real-life debate videos — all
        in one place for our members and learners.
      </motion.p>

      {/* Resource Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {resources.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800 hover:bg-gray-700 transition-all p-8 rounded-2xl shadow-lg hover:shadow-2xl group block"
          >
            <div className="flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm mb-4">{item.description}</p>
            <span className="text-primary font-medium text-sm">{item.type}</span>
          </motion.a>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-16 text-gray-400"
      >
        <p>
          Have something to share? <br />
          Send your favorite resources to{" "}
          <span className="text-primary font-medium">
            pds.official@gmail.com
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default Resources;
