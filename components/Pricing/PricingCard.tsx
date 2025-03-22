import { motion } from "framer-motion";

interface PricingPlan {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  popular: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
}

export default function PricingCard({ plan, isYearly }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
        plan.popular ? "border-2 border-terracotta" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}

      <div className="p-8">
        <h3 className="font-amazigh text-2xl mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold">
            ${isYearly ? plan.price.yearly : plan.price.monthly}
          </span>
          <span className="text-gray-600">/{isYearly ? "year" : "month"}</span>
        </div>

        <button
          className={`w-full mb-8 ${
            plan.popular ? "btn-primary" : "btn-secondary"
          }`}
        >
          Get Started
        </button>

        <div className="space-y-4">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-terracotta"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
