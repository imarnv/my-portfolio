import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt size={40} />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript size={40} />, level: 90 },
  { name: "React", icon: <FaReact size={40} />, level: 85 },
  { name: "Node.js", icon: <FaNodeJs size={40} />, level: 70 },
  { name: "Express", icon: <SiExpress size={40} />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb size={40} />, level: 60 },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, level: 95 },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-24">
      {/* Section Heading */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-text-primary">
          <span className="text-accent">02.</span> My Skills
        </h2>
        <div className="w-48 h-px bg-text-secondary"></div>
      </div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-4"
            variants={itemVariants}
          >
            {/* Circular Progress with SVG */}
            <div className="relative w-28 h-28">
  <svg
    className="w-full h-full rotate-[-90deg]"
    viewBox="0 0 100 100"
  >
    {/* Background Circle */}
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke="#e5e7eb" // light gray background
      strokeWidth="8"
      fill="none"
    />
    {/* Progress Circle */}
    <motion.circle
      cx="50"
      cy="50"
      r="45"
      stroke="rgba(128, 0, 32, 0.6)"  // burgundy with 60% opacity
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeDasharray="283"
      initial={{ strokeDashoffset: 283 }}
      whileInView={{
        strokeDashoffset: 283 - (283 * skill.level) / 100,
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  </svg>

  {/* Center Content (icon only) */}
  <div className="absolute inset-0 flex items-center justify-center text-accent">
    {skill.icon}
  </div>
</div>

            {/* Skill Name */}
            <p className="text-text-secondary font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
