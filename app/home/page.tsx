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
      className='bg-black'
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
