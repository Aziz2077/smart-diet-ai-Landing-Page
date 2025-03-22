import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      icon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none";

    const variants = {
      primary:
        "bg-terracotta text-white hover:bg-terracotta/90 focus:ring-2 focus:ring-terracotta/50",
      secondary:
        "bg-saffron text-black hover:bg-saffron/90 focus:ring-2 focus:ring-saffron/50",
      outline:
        "border-2 border-terracotta text-terracotta hover:bg-terracotta/10",
      text: "text-terracotta hover:bg-terracotta/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const buttonStyles = `
      ${baseStyles}
      ${variants[variant]}
      ${sizes[size]}
      ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""}
      ${className}
    `;

    return (
      <motion.button
        ref={ref}
        className={buttonStyles}
        disabled={disabled || isLoading}
        whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
        {...props}
      >
        {isLoading && (
          <motion.span
            className="mr-2 w-4 h-4 border-2 border-current border-t-transparent rounded-full inline-block"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        {!isLoading && icon && <span className="mr-2">{icon}</span>}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
