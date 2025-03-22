"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import QuizModal from "./QuizModal";
import styles from "./AIDemo.module.css";

export default function AIDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewMeal, setPreviewMeal] = useState<null | {
    name: string;
    time: string;
    ingredients: string[];
    image: string;
  }>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleQuizComplete = (preferences: any) => {
    // In a real app, this would call an API to get personalized meal recommendations
    // For demo purposes, we'll just set a static preview meal
    setPreviewMeal({
      name: "Djari aux Pois Chiches",
      time: "35 mins",
      ingredients: ["Chickpeas", "Chicken", "Cumin", "Tomatoes", "Onion"],
      image: "/images/dishes/djari-pois-chiches.webp",
    });

    // Store preferences in localStorage for future personalization
    localStorage.setItem("mealPreferences", JSON.stringify(preferences));
  };

  return (
    <section className="section-padding relative" id="ai-demo">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5 bg-algerian-pattern pointer-events-none"></div>

      <div className="container-custom relative">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">
            <span className="text-terracotta">AI Personalization</span> Engine
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Our AI analyzes your preferences, dietary needs, and available
            ingredients to create the perfect Algerian meal plan tailored
            specifically for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Quiz Teaser */}
          <motion.div
            className={`${styles.demoCard} rounded-xl overflow-hidden`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-8">
              <h3 className="font-amazigh text-2xl mb-6">
                Try Our AI Meal Planner
              </h3>
              <p className="text-gray-600 mb-8">
                Answer a few quick questions about your preferences, and see how
                our AI creates personalized Algerian meal suggestions for you.
              </p>

              <motion.button
                className="btn-primary w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={openModal}
              >
                See How It Works!
              </motion.button>
            </div>

            <div className={styles.quizGraphic}>
              <div className={styles.questions}>
                <div className={styles.question}>
                  <span>How spicy do you like your meals?</span>
                  <div className={styles.sliderPlaceholder}>
                    <div className={styles.sliderTrack}>
                      <div className={styles.sliderFill}></div>
                    </div>
                    <div className={styles.sliderHandle}></div>
                  </div>
                  <div className={styles.sliderLabels}>
                    <span>Mild</span>
                    <span>Fiery</span>
                  </div>
                </div>

                <div className={styles.question}>
                  <span>Pick staple ingredients in your kitchen:</span>
                  <div className={styles.ingredientIcons}>
                    <div className={`${styles.ingredient} ${styles.active}`}>
                      🌾
                    </div>
                    <div className={styles.ingredient}>🫒</div>
                    <div className={styles.ingredient}>🍯</div>
                    <div className={styles.ingredient}>🍅</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Preview */}
          <div
            className={`${styles.previewCard} rounded-xl overflow-hidden shadow-lg`}
          >
            {previewMeal ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.previewImage}>
                  <img
                    src={previewMeal.image}
                    alt={previewMeal.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-amazigh text-2xl mb-2">
                    Tomorrow's Lunch
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-bold text-terracotta">
                      {previewMeal.name}
                    </span>
                    <span className="ml-auto bg-saffron/20 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {previewMeal.time}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-bold text-gray-500 mb-2">
                      INGREDIENTS YOU ALREADY HAVE:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {previewMeal.ingredients.map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 rounded-full px-3 py-1 text-sm"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="btn-secondary w-full mt-6">
                    Get Full Recipe
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className={styles.emptyPreview}>
                <div className="text-center p-8">
                  <div className={styles.previewPlaceholder}>
                    <span className="text-5xl mb-4">✨</span>
                  </div>
                  <h3 className="font-amazigh text-2xl mb-4">
                    Your Perfect Meal
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Take the quick quiz to see your personalized Algerian meal
                    recommendation.
                  </p>
                  <motion.div
                    className={styles.arrow}
                    animate={{
                      x: [0, -10, 0],
                      transition: { repeat: Infinity, duration: 1.5 },
                    }}
                  >
                    ←
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      <QuizModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onComplete={handleQuizComplete}
      />
    </section>
  );
}
