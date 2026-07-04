import { motion } from "framer-motion";
const ProgressBar = ({ percentage }) => {
  const safePercentage = Math.min(Math.max(percentage, 0), 100);
  const progressWidth = `${safePercentage}%`;
  return (
    <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 shadow-md rounded-full"
        initial={{
          width: 0,
          boxShadow: "none",
        }}
        whileInView={{
          width: progressWidth,
          boxShadow: "0 0 12px rgba(45, 212, 191, 0.35)",
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.15,
        }}
        viewport={{
          once: true,
        }}
      />
    </div>
  );
};

export default ProgressBar;
