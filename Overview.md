# Smart Diet AI - Algerian Meals Landing Page

## Project Overview

This project is a modern, interactive landing page for an AI-powered meal planning service specifically designed for Algerian cuisine. The application aims to solve common cooking challenges faced by Algerians by providing personalized meal recommendations that respect cultural traditions while adapting to modern lifestyle needs.

## Core Problem & Solution

### Problems Addressed:
- **Meal Fatigue**: Users getting tired of cooking the same dishes repeatedly
- **Food Waste**: Unused ingredients expiring in fridges
- **Generic Recipes**: Online recipes not tailored to Algerian kitchens and ingredients
- **Time Constraints**: Lack of time to plan varied, nutritious meals

### AI-Powered Solution:
- **Personalized Meal Plans**: AI analyzes user preferences, dietary needs, and available ingredients
- **Cultural Authenticity**: Focus on traditional Algerian dishes from different regions
- **Waste Reduction**: Utilizes ingredients users already have
- **Time Efficiency**: Provides 15-minute recipes for busy schedules
- **Dietary Adaptation**: Respects health needs and dietary restrictions

## Technology Stack

### Frontend Framework
- **Next.js 14**: React framework with App Router for modern web development
- **React 18.2.0**: Component-based UI library
- **TypeScript 5.2.2**: Type-safe JavaScript for better development experience

### Styling & Design
- **Tailwind CSS 3.3.5**: Utility-first CSS framework with custom Algerian-themed colors
- **PostCSS**: Advanced CSS processing with plugins for imports, nesting, and environment variables
- **Custom Fonts**: Cairo (Google Fonts) for Arabic/Latin text and Amazigh local font for cultural authenticity

### Animation & Interaction
- **Framer Motion 10.16.4**: Smooth animations and transitions throughout the interface
- **React Intersection Observer**: Viewport-triggered animations for better user experience

### Development Tools
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Next.js CLI**: Build and development tooling

## Project Architecture

### File Structure
```
app/                    # Next.js App Router
├── globals.css         # Global styles and Tailwind imports
├── layout.tsx          # Root layout with fonts and metadata
└── page.tsx            # Home page composition

components/           # Reusable UI components
├── AIDemo/           # Interactive AI demonstration
├── CulturalShowcase/ # Regional cuisine carousel
├── FAQ/              # Frequently asked questions
├── Footer/           # Footer with newsletter signup
├── Hero/             # Landing hero section
├── HowItWorks/       # Process explanation
├── Pricing/          # Subscription plans
├── ProblemSolution/  # Problem/solution visualization
├── SocialProof/      # Testimonials and reviews
└── ui/               # Basic UI components (Button, Modal, etc.)

types/                # TypeScript type definitions
├── meal.ts           # Meal and user preference interfaces
└── region.ts         # Regional classification

lib/                  # Utility functions
├── animations.ts     # Framer Motion configurations
└── theme.ts          # Design system utilities
```

## Key Features

### 1. Interactive Hero Section
- Animated dish carousel showcasing authentic Algerian meals
- Compelling call-to-action with cultural messaging
- Responsive design with smooth animations

### 2. AI Demo & Quiz
- **Interactive Quiz Modal**: Users answer questions about preferences, spice tolerance, and available ingredients
- **Live Preview**: Shows personalized meal recommendations based on quiz responses
- **Local Storage**: Saves user preferences for future personalization

### 3. Cultural Showcase
- **Regional Carousel**: Displays dishes from different Algerian regions
- **Cultural Heritage**: Emphasizes preservation of traditional recipes
- **Interactive Region Selection**: Users can explore cuisine by geographic area

### 4. Problem-Solution Visualization
- **Visual Problem Identification**: Common cooking challenges with icons and descriptions
- **AI Algorithm Representation**: Animated visualization of the AI processing workflow
- **Benefit Highlighting**: Clear advantages of using the AI meal planning system

### 5. Social Proof & Trust Building
- **Testimonial Carousel**: User reviews and experiences
- **Statistics**: Engagement metrics ("12,532 Algerians Who Love Cooking Again!")
- **FAQ Section**: Addresses common concerns and questions

### 6. Pricing & Conversion
- **Subscription Plans**: Different tiers for various user needs
- **Clear Pricing**: Transparent cost structure
- **Call-to-Action Elements**: Strategic placement throughout the page

## Design Philosophy

### Cultural Authenticity
- **Algerian Color Palette**: Saffron (#FFD700), Terracotta (#E2725B), Olive Green (#6B8E23)
- **Typography**: Combination of Cairo (Arabic-friendly) and Amazigh fonts
- **Visual Elements**: Traditional Algerian patterns as background elements
- **Regional Representation**: Celebrates diverse culinary traditions across Algeria

### User Experience
- **Progressive Disclosure**: Information revealed as users scroll and interact
- **Smooth Animations**: Framer Motion provides fluid transitions
- **Mobile-First**: Responsive design optimized for all devices
- **Accessibility**: Semantic HTML structure with proper ARIA attributes

### Performance Optimization
- **Next.js Optimizations**: Automatic code splitting and image optimization
- **Lazy Loading**: Components load as they enter the viewport
- **Static Generation**: Fast page loads with pre-rendered content

## Data Models

The application defines comprehensive TypeScript interfaces for:
- **Meals**: Complete meal information including nutritional data
- **User Preferences**: Dietary restrictions, spice levels, allergies
- **Recipes**: Step-by-step cooking instructions
- **Meal Plans**: Personalized weekly/monthly meal schedules
- **Feedback**: User ratings and comments for continuous improvement

## Target Audience

### Primary Users
- **Health-conscious Algerians**: Individuals seeking nutritious, culturally relevant meals
- **Busy Professionals**: People with limited time for meal planning
- **Diaspora Communities**: Algerians abroad wanting to maintain culinary connections
- **Nutritionists**: Professionals working with Algerian clients

### Use Cases
- **Daily Meal Planning**: Automated weekly meal suggestions
- **Ingredient Optimization**: Reduce food waste by using available items
- **Cultural Education**: Learn about traditional Algerian dishes
- **Dietary Management**: Accommodate health conditions and preferences

## Development Status

This is a **frontend-only landing page** designed to:
- Showcase the AI meal planning concept
- Collect user interest and preferences
- Demonstrate the user interface and experience
- Validate market demand before full product development

**Note**: The AI functionality is currently simulated for demonstration purposes. The quiz interactions and meal recommendations are prototype implementations designed to illustrate the intended user experience.

## Getting Started

### Prerequisites
- Node.js (version 16.8 or higher)
- npm or yarn package manager

### Installation & Development
```bash
# Navigate to project directory
cd "smart-diet-ai Landing Page"

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

The development server will start on `http://localhost:3000` with hot reloading enabled for rapid development.

## Future Enhancements

- **Backend Integration**: Connect to actual AI meal planning API
- **User Authentication**: Account creation and login functionality
- **Recipe Database**: Comprehensive collection of Algerian recipes
- **Shopping List Generation**: Automated grocery lists based on meal plans
- **Mobile Application**: Native iOS/Android companion apps
- **Community Features**: Recipe sharing and user-generated content
- **Multilingual Support**: Arabic and Tamazight language options

---

*This landing page represents the frontend foundation for a culturally-aware AI meal planning platform that celebrates Algerian culinary heritage while solving modern lifestyle challenges.*