import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./CulturalShowcase.module.css";

interface Dish {
  id: number;
  name: string;
  image: string;
  description: string;
  region: string;
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Couscous",
    image: "/images/dishes/couscous.webp",
    description: "Traditional Berber dish of semolina",
    region: "all",
  },
  {
    id: 2,
    name: "Chakhchoukha",
    image: "/images/dishes/chakhchoukha.webp",
    description: "Dough with meat and tomato sauce",
    region: "eastern",
  },
  {
    id: 3,
    name: "Rechta",
    image: "/images/dishes/rechta.webp",
    description: "Thin noodles with chicken and chickpeas",
    region: "central",
  },
  {
    id: 4,
    name: "Bourek",
    image: "/images/dishes/bourek.webp",
    description: "Crispy filled pastry",
    region: "all",
  },
  {
    id: 5,
    name: "Tajine Zitoun",
    image: "/images/dishes/tajine-zitoun.webp",
    description: "Olive and meat stew",
    region: "kabylie",
  },
  {
    id: 6,
    name: "Chakchouka",
    image: "/images/dishes/chakchouka.webp",
    description: "Vegetable and egg dish",
    region: "all",
  },
  {
    id: 7,
    name: "Mechoui",
    image: "/images/dishes/mechoui.webp",
    description: "Slow-roasted lamb",
    region: "sahara",
  },
  {
    id: 8,
    name: "Harira",
    image: "/images/dishes/harira.webp",
    description: "Rich tomato soup",
    region: "western",
  },
  {
    id: 9,
    name: "Mhadjeb",
    image: "/images/dishes/mhadjeb.webp",
    description: "Stuffed flatbread",
    region: "sahara",
  },
  {
    id: 10,
    name: "Calentica",
    image: "/images/dishes/calentica.webp",
    description: "Chickpea flan",
    region: "coastal",
  },
];

interface RegionalCarouselProps {
  selectedRegion: string;
}

const RegionalCarousel: React.FC<RegionalCarouselProps> = ({
  selectedRegion,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const filteredDishes = dishes.filter(
    (dish) => selectedRegion === "all" || dish.region === selectedRegion
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedRegion]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredDishes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [filteredDishes]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + filteredDishes.length) %
        filteredDishes.length
    );
  };

  return (
    <div className={styles.carousel}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className={styles.slide}
        >
          <Image
            src={filteredDishes[currentIndex].image}
            alt={filteredDishes[currentIndex].name}
            width={400}
            height={300}
            className={styles.dishImage}
          />
          <div className={styles.dishInfo}>
            <h3>{filteredDishes[currentIndex].name}</h3>
            <p>{filteredDishes[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.navigation}>
        <button onClick={() => paginate(-1)} className={styles.navButton}>
          &lt;
        </button>
        <button onClick={() => paginate(1)} className={styles.navButton}>
          &gt;
        </button>
      </div>

      <div className={styles.dots}>
        {filteredDishes.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RegionalCarousel;
