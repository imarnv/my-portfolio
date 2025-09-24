import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-mono text-accent mb-4">04. What's Next?</h2>
        <h3 className="text-5xl font-bold text-text-primary mb-6">Get In Touch</h3>
        <p className="max-w-2xl mx-auto text-text-secondary mb-8">
          I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        <a href="mailto:itsarnavmehta01@gmail.com">
          <button className="px-8 py-4 bg-button text-white font-bold rounded-md hover:bg-button-hover transition-colors duration-300 shadow-lg">
            Say Hello
          </button>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;