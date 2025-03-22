import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FAQItem from "./FAQItem";

const faqItems = [
  {
    id: 1,
    question: "How does the AI personalization work?",
    answer:
      "Our AI analyzes your dietary preferences, cooking skill level, available ingredients, and time constraints to suggest personalized Algerian recipes. It learns from your feedback to improve recommendations over time.",
  },
  {
    id: 2,
    question: "Are the recipes authentic Algerian dishes?",
    answer:
      "Yes! All our recipes are sourced from traditional Algerian cuisine, covering different regions and cooking styles. We maintain authenticity while adapting to modern kitchen equipment and ingredient availability.",
  },
  {
    id: 3,
    question: "Can I specify dietary restrictions?",
    answer:
      "Absolutely! Our platform accommodates various dietary needs including halal, vegetarian, gluten-free, and specific allergies. The AI ensures all recommendations align with your dietary requirements.",
  },
  {
    id: 4,
    question: "How often are new recipes added?",
    answer:
      "We regularly update our recipe database with new dishes and variations. Premium members get early access to new recipes and seasonal specialties.",
  },
  {
    id: 5,
    question: "What if I can't find certain ingredients?",
    answer:
      "Our AI suggests suitable substitutes for hard-to-find ingredients while maintaining authentic flavors. We also help you locate specialty Algerian ingredients through our partner network.",
  },
  {
    id: 6,
    question: "Can I save and share my favorite recipes?",
    answer:
      "Yes! You can bookmark favorite recipes, create custom collections, and share them with family and friends. Premium members can also collaborate on meal planning.",
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="section-padding" id="faq">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">
            Frequently Asked <span className="text-terracotta">Questions</span>
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Everything you need to know about our AI-powered Algerian cooking
            platform
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isExpanded={expandedId === item.id}
                onToggle={() =>
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
              />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="btn-secondary">Contact Support</button>
        </motion.div>
      </div>
    </section>
  );
}
