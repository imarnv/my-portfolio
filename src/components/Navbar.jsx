import { motion } from 'framer-motion';
import Logo3D from './Logo3D.jsx'; // Corrected the import path

const Navbar = () => {
  const navLinks = ["About", "Skills", "Projects", "Contact"];

  const navLinksContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const navLinkItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex justify-between items-center px-8 py-2">
        <Logo3D />

        <motion.div 
          className="hidden md:flex items-center space-x-8"
          variants={navLinksContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, index) => (
            <motion.a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="group text-text-secondary transition-all duration-300 ease-in-out"
              variants={navLinkItemVariants}
            >
              <span className="bg-left-bottom bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                <span className="text-accent mr-1">0{index + 1}.</span> {link}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;