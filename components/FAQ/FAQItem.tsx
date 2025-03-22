import { motion } from "framer-motion";

interface FAQItemProps {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
}

export default function FAQItem({ item, isExpanded, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
      >
        <span className="font-amazigh text-lg text-gray-900">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-terracotta"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginBottom: isExpanded ? "1.5rem" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
      </motion.div>
    </motion.div>
  );
}
