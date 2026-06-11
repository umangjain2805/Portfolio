import { motion } from "framer-motion";

const Button = ({ children, onClick, variant = "primary", className = "", href }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-accent text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300",
    secondary: "bg-white/50 text-primary border border-white/50 hover:bg-white/80",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Button;
