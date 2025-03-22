import { useState } from "react";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: { monthly: 9.99, yearly: 99.99 },
    description: "Perfect for getting started with Algerian cooking",
    features: [
      "Daily meal suggestions",
      "Basic recipe instructions",
      "Shopping list generator",
      "Email support",
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: { monthly: 19.99, yearly: 199.99 },
    description: "For serious home cooks who want the full experience",
    features: [
      "Everything in Basic",
      "Advanced AI personalization",
      "Video tutorials",
      "Regional variations",
      "Priority support",
      "Family meal planning",
    ],
    popular: true,
  },
  {
    id: "family",
    name: "Family",
    price: { monthly: 29.99, yearly: 299.99 },
    description: "Share the joy of Algerian cooking with your family",
    features: [
      "Everything in Premium",
      "Up to 5 family profiles",
      "Collaborative meal planning",
      "Custom dietary preferences",
      "Weekly live cooking sessions",
      "24/7 support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section-padding bg-gray-50" id="pricing">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">
            Simple <span className="text-terracotta">Pricing</span>
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Choose the perfect plan for your Algerian culinary journey
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              className={`${!isYearly ? "text-terracotta" : "text-gray-600"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-terracotta rounded-full p-1 transition-colors"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`${isYearly ? "text-terracotta" : "text-gray-600"}`}
            >
              Yearly <span className="text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
}
