import { motion } from "framer-motion";
import { techColors } from "../../../data/techStack";


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const TechItem = ({ tech }) => {
  const Icon = tech.icon;
  return (
    <motion.div
    
      variants={itemVariants}
      whileHover={{
        scale: 1.06,
        y: -5,
        rotate:5
      }}
      transition={{
        duration: 0.25,
        ease:"easeOut",
      }}
      className="flex flex-col items-center gap-1 cursor-pointer"
    >
      <Icon className={`text-4xl ${techColors[tech.colorKey]}`} />
      <span className="text-sm text-slate-300">{tech.name}</span>
    </motion.div>
  );
};

export default TechItem;
