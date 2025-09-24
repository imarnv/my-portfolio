import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion'; // Import motion

const Socials = () => {
  return (
    <motion.div 
      className="hidden md:flex flex-col fixed bottom-0 left-8 items-center z-50"
      // Animation properties
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }} // Delay to animate after hero
    >
      <div className="flex flex-col gap-6">
        <a href="https://github.com/imarnv" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transform hover:-translate-y-1 transition-all duration-300">
          <FiGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/arnav-mehta-ba0a6028b/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transform hover:-translate-y-1 transition-all duration-300">
          <FiLinkedin size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transform hover:-translate-y-1 transition-all duration-300">
          <FiTwitter size={24} />
        </a>
      </div>
      {/* Vertical Line */}
      <div className="w-px h-24 bg-text-secondary mt-6"></div>
    </motion.div>
  );
};

export default Socials;