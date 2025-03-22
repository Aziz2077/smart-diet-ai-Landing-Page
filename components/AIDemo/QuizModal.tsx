import { useState, useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AIDemo.module.css";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (preferences: any) => void;
}

// Quiz steps
const steps = [
  {
    id: "spice",
    title: "How spicy do you like your meals?",
    type: "slider",
    min: 0,
    max: 10,
    defaultValue: 5,
  },
  {
    id: "ingredients",
    title: "Select ingredients you usually have:",
    type: "multiselect",
    options: [
      { id: "semolina", label: "Semolina", emoji: "🌾" },
      { id: "olives", label: "Olives", emoji: "🫒" },
      { id: "dates", label: "Dates", emoji: "🍯" },
      { id: "tomatoes", label: "Tomatoes", emoji: "🍅" },
      { id: "chickpeas", label: "Chickpeas", emoji: "🫘" },
      { id: "lamb", label: "Lamb", emoji: "🍖" },
      { id: "chicken", label: "Chicken", emoji: "🍗" },
      { id: "mint", label: "Mint", emoji: "🌿" },
    ],
  },
  {
    id: "dietary",
    title: "Any dietary restrictions?",
    type: "multiselect",
    options: [
      { id: "halal", label: "Halal", emoji: "✓" },
      { id: "gluten-free", label: "Gluten-Free", emoji: "🌾" },
      { id: "vegetarian", label: "Vegetarian", emoji: "🥦" },
      { id: "no-dairy", label: "No Dairy", emoji: "🥛" },
    ],
  },
  {
    id: "time",
    title: "How much time do you have for cooking?",
    type: "select",
    options: [
      { id: "quick", label: "Quick (15-30 min)", emoji: "⚡" },
      { id: "medium", label: "Medium (30-60 min)", emoji: "⏱️" },
      { id: "long", label: "Traditional (60+ min)", emoji: "👩‍🍳" },
    ],
  },
];

type PreferencesState = {
  spice: number;
  ingredients: string[];
  dietary: string[];
  time: string;
  currentStep: number;
};

type PreferencesAction =
  | { type: "SET_SPICE"; payload: number }
  | { type: "TOGGLE_INGREDIENT"; payload: string }
  | { type: "TOGGLE_DIETARY"; payload: string }
  | { type: "SET_TIME"; payload: string }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "RESET" };

const initialState: PreferencesState = {
  spice: 5,
  ingredients: [],
  dietary: ["halal"], // Default for Algerian context
  time: "",
  currentStep: 0,
};

function preferencesReducer(
  state: PreferencesState,
  action: PreferencesAction
): PreferencesState {
  switch (action.type) {
    case "SET_SPICE":
      return { ...state, spice: action.payload };
    case "TOGGLE_INGREDIENT":
      return {
        ...state,
        ingredients: state.ingredients.includes(action.payload)
          ? state.ingredients.filter((i) => i !== action.payload)
          : [...state.ingredients, action.payload],
      };
    case "TOGGLE_DIETARY":
      return {
        ...state,
        dietary: state.dietary.includes(action.payload)
          ? state.dietary.filter((d) => d !== action.payload)
          : [...state.dietary, action.payload],
      };
    case "SET_TIME":
      return { ...state, time: action.payload };
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, steps.length),
      };
    case "PREV_STEP":
      return { ...state, currentStep: Math.max(state.currentStep - 1, 0) };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function QuizModal({
  isOpen,
  onClose,
  onComplete,
}: QuizModalProps) {
  const [state, dispatch] = useReducer(preferencesReducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      onComplete(state);
      onClose();

      // Reset for next time
      dispatch({ type: "RESET" });
    }, 1500);
  };

  const currentStep = steps[state.currentStep];
  const isLastStep = state.currentStep === steps.length - 1;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl max-w-md w-full shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Modal header */}
            <div className="bg-saffron/10 p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="font-amazigh text-xl">Meal Preference Quiz</h3>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-terracotta h-full rounded-full"
                  style={{
                    width: `${((state.currentStep + 1) / steps.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Modal content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-cairo text-lg font-bold mb-6">
                    {currentStep.title}
                  </h4>

                  {currentStep.type === "slider" && (
                    <div className="mb-8">
                      <input
                        type="range"
                        min={currentStep.min}
                        max={currentStep.max}
                        value={state.spice}
                        onChange={(e) =>
                          dispatch({
                            type: "SET_SPICE",
                            payload: parseInt(e.target.value),
                          })
                        }
                        className={styles.slider}
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>Mild</span>
                        <span>Medium</span>
                        <span>Fiery</span>
                      </div>
                    </div>
                  )}

                  {currentStep.type === "multiselect" && (
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {currentStep.options.map((option) => {
                        const isSelected =
                          currentStep.id === "ingredients"
                            ? state.ingredients.includes(option.id)
                            : state.dietary.includes(option.id);

                        return (
                          <div
                            key={option.id}
                            className={`${styles.optionCard} ${isSelected ? styles.selected : ""}`}
                            onClick={() => {
                              if (currentStep.id === "ingredients") {
                                dispatch({
                                  type: "TOGGLE_INGREDIENT",
                                  payload: option.id,
                                });
                              } else if (currentStep.id === "dietary") {
                                dispatch({
                                  type: "TOGGLE_DIETARY",
                                  payload: option.id,
                                });
                              }
                            }}
                          >
                            <span className="text-xl mr-2">{option.emoji}</span>
                            <span>{option.label}</span>
                            {isSelected && (
                              <div className={styles.checkmark}>✓</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {currentStep.type === "select" && (
                    <div className="flex flex-col gap-3 mb-8">
                      {currentStep.options.map((option) => (
                        <div
                          key={option.id}
                          className={`${styles.optionCard} ${state.time === option.id ? styles.selected : ""}`}
                          onClick={() =>
                            dispatch({ type: "SET_TIME", payload: option.id })
                          }
                        >
                          <span className="text-xl mr-2">{option.emoji}</span>
                          <span>{option.label}</span>
                          {state.time === option.id && (
                            <div className={styles.checkmark}>✓</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modal footer */}
            <div className="border-t p-4 flex justify-between">
              <button
                className="btn-secondary px-4 py-2"
                onClick={() => dispatch({ type: "PREV_STEP" })}
                disabled={state.currentStep === 0}
              >
                Back
              </button>

              {isLastStep ? (
                <button
                  className="btn-primary px-6 py-2 flex items-center"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner}></span>
                      <span className="ml-2">Processing...</span>
                    </>
                  ) : (
                    "Generate Meal Plan"
                  )}
                </button>
              ) : (
                <button
                  className="btn-primary px-6 py-2"
                  onClick={() => dispatch({ type: "NEXT_STEP" })}
                >
                  Next
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
