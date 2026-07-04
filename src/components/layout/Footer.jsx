import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUp } from "react-icons/hi";
import Container from "../../ui/Container";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-white/10 bg-slate-950"
    >
      <Container>
        <div className="flex flex-col items-center gap-8 py-12">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">
              Thanks for visiting! 👋
            </h2>

            <p className="mt-3 max-w-xl text-slate-400">
              I appreciate you taking the time to explore my portfolio. If you'd
              like to collaborate, discuss ideas, or simply say hello, feel free
              to connect with me.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-2xl">
            <a
              href="https://github.com/tarkeshwaruranw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/tarkeshwar-uranw-a66a5a31a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:tarkeshwaruranw111@gmail.com"
              className="text-red-500 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <MdEmail />
            </a>
          </div>

          {/* Bottom */}
          <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
            <p>
              Designed & Built by{" "}
              <span className="text-white">Tarkeshwar Uranw</span> using React,
              Tailwind CSS & Framer Motion.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 transition-colors hover:text-indigo-400"
            >
              Back to Top
              <HiArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
