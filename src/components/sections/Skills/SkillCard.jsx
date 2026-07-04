import ProgressBar from "./ProgressBar";
import { motion, scale } from "framer-motion";

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

const iconVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 15, // Playful 15-degree tilt on layout hover
    scale: 1.15, // Subtle individual icon enlargement
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >
      <div className="max-w-md min-h-40 flex flex-col  gap-4 p-4 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-teal-400/40 rounded-2xl">
        <div className="flex justify-between text-lg text-slate-300 font-semibold">
          <div className="flex gap-3">
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.15,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Icon className={`text-3xl ${skill.colorKey}`} />
            </motion.div>
            <p>{skill.title}</p>
          </div>
          <p>{skill.proficiency}%</p>
        </div>
        <ProgressBar percentage={skill.proficiency} />
        <p className="text-wrap text-sm text-white">{skill.description}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
