import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import StepFlow from "./StepFlow";

const steps = [
  {
    id: 1,
    title: "Share Your Preferences",
    description:
      "Tell us about your taste, dietary needs, and available cooking time.",
    icon: "🎯",
  },
  {
    id: 2,
    title: "AI Analysis",
    description:
      "Our AI processes your preferences and matches them with authentic recipes.",
    icon: "🤖",
  },
  {
    id: 3,
    title: "Get Personalized Plans",
    description:
      "Receive daily meal suggestions tailored specifically for you.",
    icon: "📋",
  },
  {
    id: 4,
    title: "Cook with Confidence",
    description:
      "Follow detailed instructions and tips to create perfect Algerian dishes.",
    icon: "👨‍🍳",
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding" id="how-it-works">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            How It <span className="text-terracotta">Works</span>
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Get started with our simple 4-step process to transform your
            Algerian cooking experience
          </p>
        </motion.div>

        <StepFlow steps={steps} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="btn-primary">Start Your Journey Now →</button>
        </motion.div>
      </div>
    </section>
  );
}
