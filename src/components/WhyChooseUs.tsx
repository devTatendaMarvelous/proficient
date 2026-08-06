import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Compass, Users, Sparkles, Sliders, ShieldCheck, Heart } from 'lucide-react';

const FEATURES = [
  {
    icon: Compass,
    title: 'Local Expertise',
    description: 'Our deep roots in Victoria Falls guarantee insider access, local guides, and authentic cultural stories.',
  },
  {
    icon: Sliders,
    title: 'Tailor-Made Experiences',
    description: 'No pre-packaged itineraries. We customize every detail around your preferences, pace, and passions.',
  },
  {
    icon: Sparkles,
    title: 'Flexible Packages',
    description: 'Whether you want high adrenaline or complete relaxation, we tailor experiences that align with your requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Service',
    description: 'From pre-trip consulting to on-site transport, expect seamless premium execution and constant backup support.',
  },
  {
    icon: Heart,
    title: 'Memorable Adventures',
    description: 'Our local hosts create micro-moments of delight, from surprise river toast locations to private storytelling.',
  },
  {
    icon: Users,
    title: 'Trusted Local Travel Partner',
    description: 'A licensed, safety-first operator committed to sustainable tourism and community support in Zimbabwe.',
  },
];

export function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  } as const;


  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-accent/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-button text-xs font-bold uppercase tracking-[0.25em] mb-3 inline-block">
            The Saba Difference
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-charcoal mb-6">
            Why Choose Proficient Saba Escapes
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-charcoal/70 font-body font-light leading-relaxed">
            We translate the raw grandeur of Victoria Falls into a refined, comfortable, and deeply personalized journey.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-8 sm:p-10 rounded-3xl bg-warm-white border border-charcoal/5 shadow-md hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col items-start group hover:-translate-y-1.5"
              >
                {/* Icon Container with glowing background */}
                <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-xl text-charcoal mb-3 group-hover:text-primary transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 font-body font-light leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
