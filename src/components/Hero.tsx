import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

const SLIDES = [
  {
    image: '/images/hero_helicopter.jpg',
    title: 'Helicopter Flights',
    tagline: 'The Flight of Angels',
    description: 'Witness the sheer scale of the world\'s largest waterfall from a breathtaking aerial perspective.',
  },
  {
    image: '/images/hero_waterfalls.jpg',
    title: 'The Majestic Main Falls',
    tagline: 'Mosi-oa-Tunya',
    description: 'Feel the thunderous roar and mist of "The Smoke That Thunders" up close along the rainforest trail.',
  },
  {
    image: '/images/hero_sunset.jpg',
    title: 'Zambezi River Sunsets',
    tagline: 'Golden Hour Cruises',
    description: 'Glide down the legendary Zambezi River as the African sun paints the sky in shades of crimson and gold.',
  },
  {
    image: '/images/hero_elephant.jpg',
    title: 'Unrivaled Wildlife Safaris',
    tagline: 'African Heritage',
    description: 'Encounter majestic elephants, lions, and buffalo in their natural habitats bordering the Zambezi.',
  },
];

export function Hero({ onScrollTo }: HeroProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });

  // Autoplay function
  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  const onScrollButtonClick = useCallback(() => {
    onScrollTo('experiences');
  }, [onScrollTo]);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background Embla Carousel */}
      <div className="overflow-hidden h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide, index) => (
            <div key={index} className="relative w-full flex-none min-w-0 h-full overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay with subtle dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-black/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12 z-20 text-center select-none pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl flex flex-col items-center pointer-events-auto"
        >
          {/* Subtle branding label */}
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-button text-xs font-semibold uppercase tracking-[0.25em]">
            <Compass className="w-4 h-4 text-accent animate-spin-slow" />
            Victoria Falls, Zimbabwe
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl text-white font-heading font-bold mb-6 tracking-tight text-shadow-lg leading-none">
            Discover the Magic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-white">
              of Victoria Falls
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-body font-light mb-10 max-w-2xl leading-relaxed text-shadow-sm">
            Explore breathtaking waterfalls, thrilling adventures, luxury cruises, and unforgettable African experiences with local masters of hospitality.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={onScrollButtonClick}
              className="px-8 py-4 bg-primary hover:bg-primary/95 text-white font-semibold uppercase tracking-widest text-xs rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
            >
              Explore Experiences
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onScrollTo('contact')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold uppercase tracking-widest text-xs rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer pointer-events-auto" onClick={onScrollButtonClick}>
        <span className="text-white/60 text-[10px] font-button font-bold uppercase tracking-[0.3em] mb-2 hover:text-white transition-colors">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/40 transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Sub-hero geometric border separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary" />
    </div>
  );
}
