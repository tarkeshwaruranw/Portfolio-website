import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactItem = ({ item }) => {
  const Icon = item.icon;

  const isExternal = item.link.startsWith("http");

  return (
    <motion.a
      href={item.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-400/40"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl ${item.color}`}
      >
        <Icon />
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-semibold text-slate-400">
          {item.title}
        </h3>

        <p className="font-medium text-white break-all">
          {item.value}
        </p>
      </div>

      <FaArrowRight className="text-slate-500 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  );
};

export default ContactItem;