import techStack from "../../../data/techStack";
import TechItem from "./TechItem";
import { motion } from "framer-motion";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HeroImage = () => {
  return (
    <motion.div
    initial={{
      opacity:0,
      x:40
    }}
    animate={{
      opacity:1,
      x:0
    }}
    transition={{
      duration:1,
    }}
  
    >
      <motion.div
        whileInView={{
          y: [0, -5, 0, 10, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          delay:1.3
        }}
        className="flex justify-center"
      >
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="mb-8 text-center text-2xl font-semibold text-white">
            Frontend Stack
          </p>
          <motion.div
            className="grid grid-cols-3 gap-6"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((tech) => (
              <TechItem key={tech.id} tech={tech} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
