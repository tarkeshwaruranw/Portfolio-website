import { useEffect, useState } from "react";
import heroData from "../../../data/hero";
import Button from "../../../ui/Button";
import { AnimatePresence, motion } from "framer-motion";

const HeroContent = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const ROLE_CHANGE_INTERVAL = 3000;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % heroData.role.length);
    }, ROLE_CHANGE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col items-start justify-center"
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <p className="text-xs text-black font-bold bg-indigo-400 rounded-full py-0.5 px-2">
        {heroData.badge}
      </p>
      <p className="text-base text-slate-400 font-bold mt-6">
        {heroData.greeting}
      </p>

      <h1 className="mt-2 text-5xl font-bold md:text-6xl lg:text-7xl bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {heroData.name}
      </h1>
      <AnimatePresence mode="wait">
        <motion.h2
          className="mt-6 text-2xl max-w-xl text-indigo-400"
          key={currentRole}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -15,
          }}
        >
          {heroData.role[currentRole]}
        </motion.h2>
      </AnimatePresence>
      <p className="mt-8 max-w-xl leading-8 text-slate-300">
        {heroData.description}
      </p>

      <div className="mt-10 flex gap-5">
        <a href="#projects">
          <Button>View Projects</Button>
        </a>
        <a href="/resume.pdf" download>
            <Button variant="outline" className="text-sm">Download Resume</Button>
          </a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
