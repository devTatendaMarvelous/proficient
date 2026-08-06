import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Map } from 'lucide-react';


import logoImg from '../assets/logo.jpg';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, value, duration]);

  return <span ref={ref} className="font-heading font-bold text-4xl sm:text-5xl text-primary">{count}{suffix}</span>;
}

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const stats = [
    { value: 1250, suffix: '+', label: 'Custom Itineraries' },
    { value: 45, suffix: '+', label: 'Local Experiences' },
    { value: 15, suffix: '+', label: 'Adventure Activities' },
    { value: 100, suffix: '%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 topo-pattern relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Premium Logo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Glow / shadow effect */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-accent to-secondary rounded-full blur-xl opacity-25 group-hover:opacity-40 transition duration-700" />
              
              {/* Premium Metallic Circular Frame */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-gray-300 via-white to-gray-400 p-2 shadow-2xl flex items-center justify-center">
                <div className="absolute inset-2 rounded-full border-4 border-double border-primary/20" />
                <img
                  src={logoImg}
                  alt="Proficient Saba Escapes Logo"
                  className="rounded-full w-full h-full object-cover shadow-inner bg-white"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Information & Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-primary font-button text-xs font-bold uppercase tracking-[0.25em] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              Your Trusted Local Guide
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-charcoal mb-6 leading-tight">
              Bespoke Journeys Crafted by Victoria Falls Specialists
            </h2>
            <p className="text-base sm:text-lg text-charcoal/80 font-body font-light leading-relaxed mb-6">
              Welcome to <strong>Proficient Saba Escapes</strong>, where your dream African holiday becomes a meticulously tailored reality. Based in the heart of Victoria Falls, we design high-end, immersive travel experiences that combine luxury, thrill, and local authenticity.
            </p>
            <p className="text-base sm:text-lg text-charcoal/80 font-body font-light leading-relaxed mb-8">
              Whether you wish to marvel at the misty grandeur of Mosi-oa-Tunya, embark on elephant-tracking safaris, fly over the chasms in a helicopter, or dine under starlit skies on the banks of the Zambezi, our team of experts provides flawless execution and unparalleled hospitality.
            </p>

            {/* Core Pillars / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-button font-bold text-charcoal text-sm uppercase tracking-wider mb-1">Uncompromised Safety</h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed font-body">Rigorous checks on all activities, vehicles, and operators.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-2xl text-secondary mt-1">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-button font-bold text-charcoal text-sm uppercase tracking-wider mb-1">Deep Local Heritage</h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed font-body">Born and raised in Zimbabwe, revealing hidden vistas others miss.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-24 bg-white/65 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-xl shadow-primary/3">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center p-4">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="mt-2 text-xs sm:text-sm font-button font-bold text-charcoal/60 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
