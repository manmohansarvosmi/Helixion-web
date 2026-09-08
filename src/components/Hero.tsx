import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import slideImage1 from '../assetImage/slideImage1.png';
import slideImage2 from '../assetImage/slideImage2.png';
import slideImage3 from '../assetImage/slideImage3.png';
import slideImage4 from '../assetImage/slideImage4.png';

interface HeroProps {
  onExplore: () => void;
  onOpenContact: () => void;
}

const images = [slideImage1, slideImage2, slideImage3, slideImage4];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 260, damping: 28 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring', stiffness: 260, damping: 28 },
      opacity: { duration: 0.25 },
    },
  }),
};

export function Hero({ onExplore, onOpenContact }: HeroProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const current = Math.abs(page % images.length);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setPage(([prevPage]) => {
      const currentIdx = Math.abs(prevPage % images.length);
      const diff = index - currentIdx;
      return [prevPage + diff, diff > 0 ? 1 : -1];
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate, isPaused]);

  return (
    <section
      id="hero-section"
      className="w-full bg-[#071326] relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Wrapper: image + overlays */}
      <div className="relative w-full overflow-hidden min-h-[220px] sm:min-h-[380px] lg:min-h-[480px] flex items-center justify-center">

        {/* Dynamic Animated Slide Image with Swipe Support */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={page}
            src={images[current]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000 || offset.x < -100) {
                paginate(1);
              } else if (swipe > 10000 || offset.x > 100) {
                paginate(-1);
              }
            }}
            alt={`Helixion Slide ${current + 1}`}
            className="w-full h-auto block object-cover cursor-grab active:cursor-grabbing"
            draggable={false}
          />
        </AnimatePresence>

        {/* Prev Button */}
        <motion.button
          id="hero-prev-btn"
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        {/* Next Button */}
        <motion.button
          id="hero-next-btn"
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          {images.map((_, idx) => (
            <button
              key={idx}
              id={`hero-dot-${idx}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to Slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer relative overflow-hidden ${
                current === idx
                  ? 'w-7 sm:w-9 h-2 sm:h-2.5 bg-white shadow-md'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 shadow-sm">
          {current + 1} / {images.length}
        </div>

        {/* Top Gradient Overlay Accent */}
        <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10" />

      </div>
    </section>
  );
}
