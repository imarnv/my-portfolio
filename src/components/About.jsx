import { motion } from 'framer-motion';
import profilePhoto from '../assets/images/profile-image.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24">
      {/* Section Heading */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-text-primary">
          <span className="text-accent">01.</span> About Me
        </h2>
        <div className="w-48 h-px bg-text-secondary"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side with the conversational text */}
        <motion.div 
          className="md:w-2/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary text-lg mb-4">
            Hello there! I'm Arnav, and I build things for the web. My journey into development started with a simple curiosity for how websites worked, and it has since grown into a full-blown passion for crafting elegant, efficient, and user-friendly digital experiences.
          </p>
          <p className="text-text-secondary text-lg mb-4">
            I've always been someone who loves solving puzzles, and to me, code is the ultimate puzzle. Whether it's architecting a robust backend or designing a slick user interface, I love the challenge of turning a complex problem into a beautiful, functioning product.
          </p>
          <p className="text-text-secondary text-lg">
            When I'm not at my computer, you can usually find me exploring new technologies, contributing to open-source projects, or just enjoying a good cup of coffee. I believe in continuous learning and am always excited to dive into the next big thing in tech.
          </p>
        </motion.div>

        {/* Right side with your image */}
        <motion.div 
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-80">
            <div className="absolute inset-0 bg-accent rounded-lg transform -rotate-3 transition duration-500 hover:rotate-0 hover:scale-105"></div>
            
            <img 
              src={profilePhoto} 
              alt="Arnav Mehta" 
              className="relative w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;