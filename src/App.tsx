import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experiences } from './components/Experiences';
import { BeyondVictoriaFalls } from './components/BeyondVictoriaFalls';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-warm-white text-charcoal selection:bg-primary/20 selection:text-primary">
      <Navbar onScrollTo={scrollToSection} />
      <Hero onScrollTo={scrollToSection} />
      <Experiences onScrollTo={scrollToSection} />
      <BeyondVictoriaFalls onScrollTo={scrollToSection} />
      <Gallery />
      <About />
      <WhyChooseUs />
      <Journey />
      <Contact />
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
}

export default App;
