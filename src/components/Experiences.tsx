import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Clock, Star, Heart, ArrowRight } from 'lucide-react';

interface ExperiencesProps {
  onScrollTo: (id: string) => void;
}

const EXPERIENCES = [
  {
    title: 'Helicopter Flight',
    image: '/images/exp_helicopter.jpg',
    description: 'Fly over the massive Victoria Falls chasm in a thrilling "Flight of Angels" helicopter excursion.',
    duration: '15 or 30 Mins',
    highlights: ['360-degree aerial views', 'Fly through the spray mist', 'Photographer friendly cabin'],
    bestFor: 'Aerial photography & awe-inspiring vistas',
  },
  {
    title: 'Main Falls Tour',
    image: '/images/exp_waterfalls.jpg',
    description: 'Explore the iconic viewpoints of the world\'s largest sheet of falling water on foot with a local expert.',
    duration: '2 - 3 Hours',
    highlights: ['16 distinct viewpoints', 'Local history & geology', 'Rainbow sightings in spray'],
    bestFor: 'First-time visitors & nature lovers',
  },
  {
    title: 'Rainforest Walk',
    image: '/images/exp_rainforest.jpg',
    description: 'Delve into the unique, rain-kissed forest ecosystem sustained solely by the mist of Victoria Falls.',
    duration: '2 Hours',
    highlights: ['Rare plant species', 'Abundant tropical birdlife', 'Symphony of rainforest sounds'],
    bestFor: 'Eco-tourists & botanical enthusiasts',
  },
  {
    title: 'Victoria Falls Bridge',
    image: '/images/exp_bridge.jpg',
    description: 'Walk upon the historic 1905 steel arch bridge spanning the canyon between Zimbabwe and Zambia.',
    duration: '1.5 Hours',
    highlights: ['Rich colonial history', 'Gorge & river views', 'Walk across two countries'],
    bestFor: 'History buffs & engineering fans',
  },
  {
    title: 'Bridge Bungee Jump',
    image: '/images/exp_bungee.jpg',
    description: 'Plunge 111 meters down into the Batoka Gorge from the Victoria Falls Bridge in a legendary leap of faith.',
    duration: '1 Hour',
    highlights: ['111m freefall experience', 'Stunning gorge backdrop', 'Certified professional crew'],
    bestFor: 'Adrenaline junkies & thrill-seekers',
  },
  {
    title: 'Sunset River Cruise',
    image: '/images/exp_cruise.jpg',
    description: 'Embark on a luxury catamaran cruise on the upper Zambezi, sipping cocktails as animals gather by the shore.',
    duration: '3 Hours',
    highlights: ['Gourmet tapas & drinks', 'Hippo & elephant sightings', 'Incredible orange sunsets'],
    bestFor: 'Couples & relaxed social gatherings',
  },
  {
    title: 'Vintage Safari Train',
    image: '/images/exp_train.jpg',
    description: 'Step back in time on a luxury steam train ride over the bridge, featuring fine dining and colonial elegance.',
    duration: '4 Hours',
    highlights: ['Five-star silver service', 'Historic steam locomotive', 'Crossing the bridge at dusk'],
    bestFor: 'Luxury travellers & vintage romantics',
  },
  {
    title: 'The Boma Dinner',
    image: '/images/exp_dinner.jpg',
    description: 'A feast of African cuisine accompanied by traditional drumming, interactive dancing, and campfire stories.',
    duration: '3 - 4 Hours',
    highlights: ['Traditional game meat buffet', 'Interactive drumming show', 'Cultural face painting'],
    bestFor: 'Foodies & cultural immersion seekers',
  },
];

export function Experiences({ onScrollTo }: ExperiencesProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 15 } },
  } as const;


  return (
    <section id="experiences" className="py-24 sm:py-32 bg-white relative">
      {/* Background soft geometric divider */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-warm-white to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-button text-xs font-bold uppercase tracking-[0.25em] mb-3 inline-block">
            Bespoke Activities
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-charcoal mb-6">
            Curate Your Victoria Falls Adventure
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-charcoal/70 font-body font-light leading-relaxed">
            From awe-inspiring helicopter views to blood-pumping bungee jumps, explore our hand-picked signature experiences in Victoria Falls.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex flex-col rounded-3xl bg-warm-white border border-charcoal/5 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
            >
              {/* Card Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-black/10 opacity-80" />
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-button font-bold text-charcoal shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  {exp.duration}
                </div>

                {/* Best For Tag */}
                <div className="absolute bottom-4 left-4 right-4 text-xs font-button text-white/90 font-medium tracking-wide flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                  <span className="truncate">{exp.bestFor}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-charcoal mb-3 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 font-body font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="border-t border-charcoal/5 pt-4 mb-6">
                    <h4 className="text-[11px] font-button font-bold text-charcoal/40 uppercase tracking-widest mb-3">Highlights</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-xs text-charcoal/75 font-body">
                          <Heart className="w-3 h-3 text-secondary fill-secondary/20 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Request Quote Button */}
                <button
                  onClick={() => onScrollTo('contact')}
                  className="w-full py-3.5 rounded-2xl bg-white hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-white font-button text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  Request Quote
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
