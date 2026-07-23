import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  variant = "solid",
  icon = true,
  className = "",
  as: Component = "button",
  ...props
}) {
  const MotionComponent = motion.create(Component);

  const base =
    "group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide font-medium rounded-full transition-colors duration-300 focus-visible:outline-2";

  const styles = {
    solid: "bg-gold-400 text-char-950 hover:bg-gold-300",
    outline:
      "border border-gold-500/60 text-cream hover:border-gold-300 hover:text-gold-200",
    ghost: "text-cream/80 hover:text-gold-300",
  };

  return (
    <MotionComponent
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`${base} ${styles[variant] || styles.solid} ${className}`}
      {...props}
    >
      {children}

      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </MotionComponent>
  );
}