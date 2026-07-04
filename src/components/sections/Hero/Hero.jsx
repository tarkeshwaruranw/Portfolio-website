import { motion } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section id="hero" className="grid-bg relative min-h-screen overflow-hidden py-10 md:pt-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />

        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 sm:gap-20 px-6 sm:px-10 pt-30 md:pt-20 lg:grid-cols-2 z-10">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
