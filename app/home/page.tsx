import Navbar from '../components/Navbar';
import About from '../components/About';
import { Import } from 'lucide-react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
