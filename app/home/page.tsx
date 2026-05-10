import Navbar from '../components/Navbar';
import About from '../components/About';
import Hero from '../components/Hero';
import Skills from '../components/Skill';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div
      className='bg-gradient-to-b
from-blue-400
via-blue-600
to-blue-900 min-h-screen'
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
