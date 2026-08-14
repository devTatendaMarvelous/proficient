import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  Trees,
  Landmark,
  Castle,
  Mountain,
  Sun,
  ArrowRight,
} from 'lucide-react';

interface BeyondVictoriaFallsProps {
  onScrollTo: (id: string) => void;
}

const CATEGORIES = [
  {
    id: 'wilderness',
    icon: Trees,
    title: 'Wilderness Adventure',
    tagline: 'For wildlife and nature lovers',
    items: [
      'Experience the best wildlife viewing in Hwange National Park, home to the Big 5 and one of Africa’s largest elephant herds.',
      'Discover Malilangwe Wildlife Reserve for luxury, exclusivity, and serious conservation — a private sanctuary for Big 5, rhino, and rare wildlife.',
      'Enjoy the stunning views of Lake Kariba with houseboats, fishing, and sunset cruises.',
    ],
  },
  {
    id: 'culture',
    icon: Landmark,
    title: 'Culture',
    tagline: 'Zimbabwe’s living heritage',
    items: [
      'Step beyond the Falls and immerse yourself in Zimbabwe’s living heritage. In Binga, the Tonga people welcome visitors to the Binga Cultural Village where you can experience traditional dances, music, and crafts firsthand.',
      'Learn centuries-old Tonga traditions including fishing and farming techniques, reed mat-making, and storytelling sessions that bring local legends to life.',
      'Visit the BaTonga Museum & Craft Centre, featured in Binga’s tourism promotions, to discover the history and artistry of the community.',
      'Throughout the year, vibrant cultural festivals such as the Kasambabezi Marathon, Mama Susan Foundation events, and the BaTonga Cultural Festival celebrate Ngoma Buntibe and Chilimba practices, drawing visitors from across the region.',
      'Don’t miss the chance to shop authentic local crafts and products like tamarandi/busikka fruit, valued for its medicinal uses — a true taste of Matabeleland North culture.',
    ],
  },
  {
    id: 'historical',
    icon: Castle,
    title: 'Historical Adventure',
    tagline: 'Step back in time',
    items: [
      'Explore the monumental Great Zimbabwe Ruins, a UNESCO World Heritage Site. Climb the iconic Hill Complex, the ancient royal and spiritual center with panoramic views.',
      'Visit Khami Ruins, the impressive capital that succeeded Great Zimbabwe, famous for its stone terraces.',
      'Discover Nalatale Ruins with its beautifully patterned stone walls — a quiet, well-preserved gem.',
      'Wander the historic landscapes of Matobo National Park with granite hills, ancient cave art, and unique wildlife.',
    ],
  },
  {
    id: 'weekend',
    icon: Mountain,
    title: 'Weekend Wander',
    tagline: '2–3 day escapes from Victoria Falls',
    items: [
      'Find serenity in the misty mountains, waterfalls, and tea estates of the Eastern Highlands.',
      'Combine history and wildlife with a Matobo National Park weekend.',
      'Unwind by the water on a relaxing Lake Kariba getaway.',
    ],
  },
  {
    id: 'daytrips',
    icon: Sun,
    title: 'Quick Day Trips',
    tagline: 'Easy add-ons from Victoria Falls',
    items: [
      'Chobe National Park, Botswana – See Africa’s largest elephant herds on a game drive + river cruise. Cross into Botswana for the day.',
      'Matetsi Private Game Reserve – Exclusive safari 45min from Vic Falls. Walking safaris, night drives, and luxury game viewing.',
      'Hwange National Park – Full day game drive in Zimbabwe’s premier wildlife park.',
      'Matobo National Park – Rhino tracking, ancient rock art, and granite landscapes.',
      'Great Zimbabwe Ruins – Fly-in day trip to explore the Hill Complex and Great Enclosure.',
    ],
  },
];

export function BeyondVictoriaFalls({ onScrollTo }: BeyondVictoriaFallsProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 16 } },
  } as const;

  return (
    <section id="beyond" className="py-24 sm:py-32 topo-pattern relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-button text-xs font-bold uppercase tracking-[0.25em] mb-3 inline-block">
            Explore Further
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-charcoal mb-6">
            Beyond Victoria Falls
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-charcoal/70 font-body font-light leading-relaxed">
            Apart from the stunning areas of Victoria Falls, we can also take tourists who wish to travel beyond Victoria Falls to any resort centres in Zimbabwe.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="space-y-8"
        >
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.id}
                variants={itemVariants}
                className="rounded-3xl bg-white/80 backdrop-blur-sm border border-charcoal/5 shadow-lg overflow-hidden"
              >
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm font-button font-medium text-primary tracking-wide">
                        {category.tagline}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 sm:pl-[4.75rem]">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm sm:text-base text-charcoal/75 font-body font-light leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-14 text-center">
          <button
            onClick={() => onScrollTo('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-button text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 transition-all cursor-pointer group"
          >
            Plan Your Beyond Trip
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
