import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Button from "./Button";

const Navbar = () => {
  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="glass-navbar px-8 py-3 rounded-full flex items-center justify-between shadow-lg">
        <div className="text-xl font-bold tracking-tight text-primary">
          Umang <span className="text-accent">Jain</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-secondary hover:text-accent cursor-pointer transition-colors font-medium text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Button variant="primary" className="py-2 text-sm px-5" href="#">
            Resume
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
