import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Define dish data with types
type Dish = {
  id: number;
  name: string;
  imageSrc: string;
  description: string;
};

const dishes: Dish[] = [
  {
    id: 1,
    name: "Traditional Couscous",
    imageSrc: "/images/dishes/couscous.webp",
    description: "Steamed semolina with tender lamb and vegetables"
  },
  {
    id: 2,
    name: "Chorba Frik",
    imageSrc: "/images/dishes/chorba.webp",
    description: "Traditional Algerian soup with lamb and crushed wheat"
  },
  {
    id: 3,
    name: "Makroudh",
    imageSrc: "/images/dishes/makroudh.webp",
    description: "Semolina cookies filled with dates and honey"
  },
  {
    id: 4,
    name: "Algerian Tajine",
    imageSrc: "/images/dishes/tajine.webp",
    description: "Slow-cooked savory stew with tender meat and spices"
  }
];

export default function DishCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={dishes[currentIndex].imageSrc}
            alt={dishes[currentIndex].name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={currentIndex === 0}
            className="object-cover"
          />
          
          {/* Overlay and caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-amazigh text-2xl mb-2">{dishes[currentIndex].name}</h3>
            <p className="font-cairo text-sm text-white/80">{dishes[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {dishes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-saffron scale-110" : "bg-white/50"
            }`}
            aria-label={`View ${dishes[index].name}`}
          />
        ))}
      </div>
    </div>
  );
}
