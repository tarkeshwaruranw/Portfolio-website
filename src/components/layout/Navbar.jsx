import navLinks from "../../data/navLinks";
import Button from "../../ui/Button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mt-5 flex h-16 items-center justify-between rounded-full border border-white/10 bg-slate-950/40 px-8 backdrop-blur-xl">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-bold">
            <span className="text-indigo-500">T</span>
            <span className="text-white">U</span>
          </a>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Button */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="text-sm">Resume</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
