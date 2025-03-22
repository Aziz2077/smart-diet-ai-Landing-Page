import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface InputSliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  labels?: string[];
  showValue?: boolean;
  className?: string;
}

export default function InputSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  labels,
  showValue = false,
  className = "",
}: InputSliderProps) {
  const [isDragging, setIsDragging] = useState(false);

  // Calculate percentage for background gradient
  const percentage = ((value - min) / (max - min)) * 100;

  // Handle keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      onChange(Math.min(value + step, max));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      onChange(Math.max(value - step, min));
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onKeyDown={handleKeyDown}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          className="
            w-full h-2 rounded-full appearance-none cursor-pointer
            bg-gradient-to-r from-terracotta to-terracotta
            bg-[length:var(--background-size)] bg-no-repeat
            focus:outline-none focus:ring-2 focus:ring-terracotta/50
          "
          style={{
            ["--background-size" as any]: `${percentage}% 100%`,
            background: `linear-gradient(to right, #E2725B ${percentage}%, #E0E0E0 ${percentage}%)`,
          }}
        />

        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${percentage}%` }}
          animate={isDragging ? { scale: 1.2 } : { scale: 1 }}
        >
          <div className="w-4 h-4 bg-terracotta rounded-full shadow-md" />
        </motion.div>
      </div>

      {showValue && (
        <div className="mt-2 text-center font-medium text-gray-700">
          {value}
        </div>
      )}

      {labels && (
        <div className="flex justify-between mt-2">
          {labels.map((label, index) => (
            <span key={index} className="text-sm text-gray-500">
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
