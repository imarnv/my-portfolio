import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Socials from './components/Socials.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    // Main container with your background color
    <div className="bg-background text-text-primary font-sans">
      {/* Fixed position components */}
      <Navbar />
      <Socials />

      {/* Main content sections */}
      <main className="px-8 md:px-24 lg:px-48">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* You can add your Projects and Contact sections here later */}
      </main>
    </div>
  );
}

export default App;