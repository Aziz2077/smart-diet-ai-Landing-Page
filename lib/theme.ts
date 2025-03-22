export const theme = {
  colors: {
    saffron: "#FFD700",
    terracotta: "#E2725B",
    oliveGreen: "#6B8E23",
    black: "#333333",
    white: "#FFFFFF",
    gray: {
      light: "#F5F5F5",
      medium: "#E0E0E0",
      dark: "#707070"
    }
  },
  fonts: {
    primary: "'Cairo', sans-serif",
    secondary: "'Amazigh', serif"
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px"
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  },
  animation: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms"
  }
};

export type ThemeType = typeof theme;
