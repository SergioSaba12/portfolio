// components/sections/GalleryCarousel.jsx
import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GalleryCarousel = memo(function GalleryCarousel({ images, currentIndex, onIndexChange }) {
    const handlePrev = () => {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        onIndexChange((currentIndex + 1) % images.length);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-apple">
                <div className="text-center mb-8">
                    <div className="eyebrow">Gallery</div>
                    <h2 className="text-title mt-2">Award moments</h2>
                    <p className="text-subtitle mt-3">Real events, real validation, real impact</p>
                </div>

                <div className="relative overflow-hidden rounded-3xl bg-black" style={{ height: '550px' }}>
                    {/* Blurred background for premium effect */}
                    <div className="absolute inset-0">
                        <img
                            src={images[currentIndex]}
                            alt=""
                            className="w-full h-full object-cover blur-2xl scale-110 opacity-50"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                    </div>

                    {/* Main image */}
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Award event ${currentIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-contain z-10"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </AnimatePresence>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => onIndexChange(idx)}
                                className={`h-2 rounded-full transition-all ${idx === currentIndex
                                        ? 'w-8 bg-white'
                                        : 'w-2 bg-white/50 hover:bg-white/75'
                                    }`}
                                aria-label={`Go to image ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg transition z-20"
                        aria-label="Previous image"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg transition z-20"
                        aria-label="Next image"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image counter */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium z-20">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default GalleryCarousel;
