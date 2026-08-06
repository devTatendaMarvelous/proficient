import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const IMAGES = [
  {
    src: '/images/hero_elephant.jpg',
    title: 'Majestic Savannah Elephant',
    category: 'Wildlife',
    aspect: 'aspect-square',
  },
  {
    src: '/images/exp_waterfalls.jpg',
    title: 'The Mist of Mosi-oa-Tunya',
    category: 'Waterfalls',
    aspect: 'aspect-video',
  },
  {
    src: '/images/gallery_river.jpg',
    title: 'Zambezi River Vista',
    category: 'Scenery',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/exp_cruise.jpg',
    title: 'Luxury Catamaran Cruise',
    category: 'Experiences',
    aspect: 'aspect-square',
  },
  {
    src: '/images/gallery_sunset_acacia.jpg',
    title: 'African Golden Hour Sunset',
    category: 'Scenery',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/gallery_zebras.jpg',
    title: 'Wild Zebras Grazing',
    category: 'Wildlife',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/exp_bungee.jpg',
    title: 'Adrenaline Gorge Bungee',
    category: 'Adventure',
    aspect: 'aspect-video',
  },
  {
    src: '/images/hero_helicopter.jpg',
    title: 'Helicopter Aerial Views',
    category: 'Adventure',
    aspect: 'aspect-square',
  },
];

export function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + IMAGES.length) % IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-warm-white relative overflow-hidden">
      {/* Subtle organic dividers */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-button text-xs font-bold uppercase tracking-[0.25em] mb-3 inline-block">
            Visual Journal
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-charcoal mb-6">
            Immersive Moments Captured
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-charcoal/70 font-body font-light leading-relaxed">
            Take a visual tour through the incredible vistas, wildlife encounters, and high-adrenaline moments waiting for you at Victoria Falls.
          </p>
        </div>

        {/* Masonry Columns */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          {IMAGES.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-500 border border-charcoal/5"
            >
              {/* Image Container with custom aspect ratio */}
              <div className={`${img.aspect} w-full overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>

              {/* Gradient overlay & Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-accent text-[10px] font-button font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" />
                  {img.category}
                </span>
                <h4 className="text-white font-heading font-semibold text-lg sm:text-xl leading-snug">
                  {img.title}
                </h4>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Image Control */}
            <button
              onClick={prevImage}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Frame */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-[70vh] flex items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={IMAGES[selectedIdx].src}
                alt={IMAGES[selectedIdx].title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10 pointer-events-auto"
              />
            </motion.div>

            {/* Next Image Control */}
            <button
              onClick={nextImage}
              className="absolute right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Metadata overlay */}
            <div className="mt-6 text-center max-w-xl px-4 select-none pointer-events-none">
              <span className="text-accent text-xs font-button font-bold uppercase tracking-widest">
                {IMAGES[selectedIdx].category}
              </span>
              <h3 className="text-white font-heading text-xl sm:text-2xl mt-1.5 font-semibold">
                {IMAGES[selectedIdx].title}
              </h3>
              <p className="text-white/40 text-[10px] mt-2 font-button uppercase tracking-widest">
                Image {selectedIdx + 1} of {IMAGES.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
