import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import DishCarousel from "./DishCarousel";
import styles from "./Hero.module.css";

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className={`min-h-screen flex items-center relative overflow-hidden ${styles.heroSection}`}
    >
      {/* Algerian pattern background */}
      <div className="absolute inset-0 bg-algerian-pattern opacity-10 z-0"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1 className="heading-primary mb-6" variants={itemVariants}>
              Discover Authentic Algerian Meals,{" "}
              <span className="text-terracotta">Curated Daily by AI</span>
            </motion.h1>

            <motion.p
              className="paragraph mb-8 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Get personalized meal plans tailored to your taste, dietary needs,
              and local ingredients – no more meal planning stress!
            </motion.p>

            <motion.button
              className={`btn-primary ${styles.ctaButton}`}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Start Your Culinary Journey →
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.carouselWrapper}
          >
            <DishCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
