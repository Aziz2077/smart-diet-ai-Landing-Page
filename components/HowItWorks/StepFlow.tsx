import { motion } from "framer-motion";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface StepFlowProps {
  steps: Step[];
}

export default function StepFlow({ steps }: StepFlowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative"
        >
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
          )}

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            {/* Step Number */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-terracotta text-white rounded-full flex items-center justify-center font-bold">
              {step.id}
            </div>

            {/* Icon */}
            <div className="text-4xl mb-4">{step.icon}</div>

            {/* Content */}
            <h3 className="font-amazigh text-xl mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
