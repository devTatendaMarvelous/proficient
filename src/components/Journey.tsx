import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, Mail, FileText, CheckCircle, Smile } from 'lucide-react';

const STEPS = [
  {
    icon: Calendar,
    title: 'Choose Activities',
    description: 'Select your preferred Victoria Falls experiences from helicopter flights, sunsets, safaris, and adrenaline adventures.',
    color: 'border-primary text-primary bg-primary/5',
  },
  {
    icon: Mail,
    title: 'Contact Us',
    description: 'Complete our simple quote form. Share your travel dates, guest count, and the activities you want to experience.',
    color: 'border-secondary text-secondary bg-secondary/5',
  },
  {
    icon: FileText,
    title: 'Receive Personalized Quote',
    description: 'Our team constructs a bespoke day-by-day itinerary and competitive quote, adjusting it to your preferences.',
    color: 'border-accent text-accent bg-accent/5',
  },
  {
    icon: CheckCircle,
    title: 'Confirm Booking',
    description: 'Approve your customized itinerary. We secure all activity slots, private drivers, and dinner reservations.',
    color: 'border-primary text-primary bg-primary/5',
  },
  {
    icon: Smile,
    title: 'Enjoy Victoria Falls',
    description: 'Touch down in Zimbabwe and enjoy a flawless, magical African escape with our local team guiding you throughout.',
    color: 'border-secondary text-secondary bg-secondary/5',
  },
];

export function Journey() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 sm:py-32 topo-pattern relative overflow-hidden">
      {/* Soft gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-secondary/15 to-accent/10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-button text-xs font-bold uppercase tracking-[0.25em] mb-3 inline-block">
            Seamless Planning
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-charcoal mb-6">
            Your Journey to Victoria Falls
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-charcoal/70 font-body font-light leading-relaxed">
            Planning your dream escape is simple. Follow these five straightforward steps to unlock the magic of Zimbabwe.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-[29px] md:left-1/2 md:-translate-x-1/2 top-8 bottom-8 w-[2px] bg-charcoal/10 pointer-events-none" />

          {/* Steps List */}
          <div className="space-y-12 md:space-y-20">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Marker Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-10 flex items-center justify-center w-14 h-14 rounded-full border-2 bg-white shadow-md">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="w-full md:w-[45%] pl-20 md:pl-0">
                    <div className={`p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-charcoal/5 shadow-lg relative ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}>
                      {/* Step index pill */}
                      <span className="text-[10px] font-button font-bold text-primary uppercase tracking-[0.2em] mb-2 inline-block">
                        Step 0{idx + 1}
                      </span>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-charcoal mb-3">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal/70 font-body font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for desktop layout grid alignment */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
