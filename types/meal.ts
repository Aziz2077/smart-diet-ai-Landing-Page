// Define the Meal type
export interface Meal {
  id: number;
  name: string;
  description: string;
  image: string;
  region: string;
  ingredients: string[];
  instructions: string[];
  preparationTime: number;
  difficulty: "Easy" | "Medium" | "Hard";
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    imageUrl: string;
  };
}

// Define the MealPreference type
export interface MealPreference {
  spiceLevel: "Low" | "Medium" | "High";
  dietaryRestrictions: string[];
  allergies: string[];
  preferredCuisines: string[];
}

// Define the User type
export interface User {
  id: number;
  name: string;
  email: string;
  mealPreferences: MealPreference;
}

// Define the Recipe type
export interface Recipe {
  id: number;
  mealId: number;
  steps: string[];
  cookingTime: number;
  servings: number;
}

// Define the MealPlan type
export interface MealPlan {
  id: number;
  userId: number;
  meals: Meal[];
  startDate: Date;
  endDate: Date;
}

// Define the Ingredient type
export interface Ingredient {
  id: number;
  name: string;
  category: string;
  nutritionalValue: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

// Define the ShoppingList type
export interface ShoppingList {
  id: number;
  userId: number;
  items: {
    ingredientId: number;
    quantity: number;
    unit: string;
  }[];
  date: Date;
}

// Define the FeedbackRating type
export type FeedbackRating = 1 | 2 | 3 | 4 | 5;

// Define the MealFeedback type
export interface MealFeedback {
  id: number;
  userId: number;
  mealId: number;
  rating: FeedbackRating;
  comment: string;
  date: Date;
}
