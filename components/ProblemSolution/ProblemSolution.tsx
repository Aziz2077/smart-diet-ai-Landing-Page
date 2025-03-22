import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ProblemSolution.module.css';

// Problem items data
const problemItems = [
  { icon: "🔄", title: "Meal Fatigue", description: "Tired of cooking the same dishes repeatedly" },
  { icon: "🗑️", title: "Wasted Ingredients", description: "Unused food items expiring in your fridge" },
  { icon: "📋", title: "Generic Recipes", description: "Online recipes not tailored to Algerian kitchens" },
  { icon: "⏰", title: "Time Constraints", description: "No time to plan varied, nutritious meals" }
];

// Solution items data
const solutionItems = [
  { icon: "🌱", title: "Reduces Food Waste", description: "Uses ingredients you already have" },
  { icon: "🍎", title: "Adapts to Local Seasons", description: "Suggests seasonal Algerian produce" },
  { icon: "⚡", title: "15-Minute Recipes", description: "Quick meals for busy weekdays" },
  { icon: "🥗", title: "Dietary-Friendly", description: "Respects your health needs and preferences" }
];

export default function ProblemSolution() {
  const [problemRef, problemInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [solutionRef, solutionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-gray-50" id="problem-solution">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-16">
          Why AI-Powered <span className="text-terracotta">Algerian Meal Planning</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Problems Grid */}
          <motion.div 
            ref={problemRef}
            initial={{ opacity: 0, x: -20 }}
            animate={problemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <h3 className="font-amazigh text-xl mb-6 text-gray-900">Common Cooking Challenges</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {problemItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={styles.problemCard}
                >
                  <div className={styles.iconWrapper}>{item.icon}</div>
                  <h4 className="font-cairo font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Solution Visualization */}
          <motion.div
            ref={solutionRef}
            initial={{ opacity: 0, x: 20 }}
            animate={solutionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <h3 className="font-amazigh text-xl mb-6 text-gray-900">Our AI Solution</h3>
            
            {/* AI Algorithm Graphic */}
            <div className={styles.algorithmGraphic}>
              <div className={styles.inputsNode}>
                <h5>Your Inputs</h5>
                <ul>
                  <li>Dietary Needs</li>
                  <li>Pantry Items</li>
                  <li>Cooking Time</li>
                </ul>
              </div>
              <div className={styles.processingNode}>
                <div className={styles.processingAnimation}>
                  <div className={styles.circle}></div>
                  <div className={styles.circle}></div>
                  <div className={styles.circle}></div>
                </div>
                <span>AI Processing</span>
              </div>
              <div className={styles.outputNode}>
                <h5>Personalized Output</h5>
                <p>Tailored Algerian meal plans</p>
              </div>
            </div>
            
            {/* Solution Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {solutionItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={styles.solutionCard}
                >
                  <div className={styles.solutionIcon}>{item.icon}</div>
                  <h4 className="font-cairo font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
