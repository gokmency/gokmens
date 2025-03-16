import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
      }}
      className={cn(
        "pointer-events-none absolute inset-0 z-30 transition-opacity duration-300",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black opacity-50" />
      <div
        className="absolute inset-0 opacity-0 mix-blend-overlay"
        style={{
          background: `radial-gradient(600px circle at 0px 0px, ${fill}, transparent 80%)`,
        }}
      />
    </motion.div>
  );
}