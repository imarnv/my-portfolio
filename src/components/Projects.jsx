import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Import your local images at the top of the file
import trafficSystemImage from '../assets/images/traffic-system.png';
import punyaProjectImage from '../assets/images/punya-image.png';

const projectsData = [
  {
    title: "Dynamic Traffic Management System",
    description: "A smart traffic control system that uses real-time vehicle detection to dynamically adjust signal timings, reducing congestion and improving traffic flow in urban areas.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Flask"],
    // Use the imported image variable here.
    imageUrl: trafficSystemImage, 
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Project Punya",
    description: "An innovative platform connecting hotels with surplus food to nearby NGOs. This initiative minimizes food waste by facilitating easy registration and claims, ensuring that surplus meals reach those in need.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    // Use the imported image variable here.
    imageUrl: punyaProjectImage,
    liveLink: "#",
    repoLink: "#",
  },
];

const Projects = () => {
  // ... the rest of the component code remains exactly the same
  return (
    <section id="projects" className="py-24">
      {/* Section Heading */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold text-text-primary">
          <span className="text-accent">03.</span> Things I’ve Built
        </h2>
        <div className="w-48 h-px bg-text-secondary"></div>
      </div>

      {/* Projects List */}
      <div className="space-y-24">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="md:w-1/2">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden group shadow-xl">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>

            {/* Project Details */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-accent mb-4">{project.title}</h3>
              <p className="bg-white/5 p-6 rounded-md shadow-lg text-text-secondary mb-6">
                {project.description}
              </p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                {project.technologies.map(tech => (
                  <li key={tech} className="bg-accent/10 text-accent text-sm font-mono px-3 py-1 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center md:justify-start gap-6">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300">
                  <FiGithub size={24} />
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300">
                  <FiExternalLink size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;