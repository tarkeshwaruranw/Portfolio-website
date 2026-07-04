import { motion } from "framer-motion";

const cardVariants = {
    rest: { 
      scale: 1, 
      y: 0 
    },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: { duration: 0.25, ease: "easeOut" }
    }
  };

const iconVariants = {
    rest: { rotate: 0 },
    hover: { 
      rotate: 10,
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  }

const AboutCard = ({ about }) => {
  const Icon = about.icon;
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
    className="min-h-50 max-w-md bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-xl text-slate-300 flex flex-col justify-between gap-3 cursor-pointer hover:border-indigo-400/40 transition-colors duration-300">
        <div className="flex items-center gap-4">
          <motion.div
          variants={iconVariants}
          >
          <Icon className={`text-4xl ${about.color}`}  />
          </motion.div>
          <h3 className="text-xl font-bold">{about.title}</h3>
        </div>
        <p className="text-sm leading-relaxed">{about.description}</p>
        <div className="flex gap-3 flex-wrap">
          {about.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/20 py-1 px-3 rounded-2xl"
            >
              {tag}
            </span>
          ))}
        </div>
    </motion.div>
  );
};

export default AboutCard;
