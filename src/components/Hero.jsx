import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <ParticleBackground />

      {/* CHANGED: Added tracking-wider for more letter spacing */}
      <motion.p variants={itemVariants} className="font-mono text-accent text-lg mb-4 relative z-10 tracking-wider">        Hi, my name is
      </motion.p>
      
      {/* CHANGED: Replaced solid color with a subtle text gradient */}
      <motion.h1 
        variants={itemVariants} 
        className="text-5xl md:text-7xl font-bold relative z-10 bg-gradient-to-r from-text-primary to-accent text-transparent bg-clip-text"
      >
        Arnav Mehta.
      </motion.h1>
      
      <motion.div variants={itemVariants} className="text-4xl md:text-6xl font-bold text-[#475569] mt-2 h-20 md:h-24 relative z-10">
        <TypeAnimation
          sequence={[
            'I build elegant user interfaces.',
            2000,
            'I create robust backend systems.',
            2000,
            'I bring ideas to life with code.',
            2000,
            'I craft seamless digital experiences.',
            2000,
            'I build things for the web.',
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>
      
      <motion.p variants={itemVariants} className="max-w-xl mt-6 text-text-secondary text-lg relative z-10">
        I'm a passionate software developer specializing in creating modern, responsive, and user-friendly web applications. My goal is to combine functionality with elegant design to build exceptional digital experiences.
      </motion.p>
      
      <motion.div variants={itemVariants} className="mt-8 relative z-10">
        <a href="#contact">
          <button className="px-8 py-4 bg-button text-white font-bold rounded-md hover:bg-button-hover transition-colors duration-300 shadow-lg">
            Get In Touch
          </button>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;