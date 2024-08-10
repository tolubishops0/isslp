"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  onComplete?: () => void;
};

export default function TypingText({ text, onComplete }: AnimatedTextProps) {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text?.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text?.length, {
      type: "tween",
      duration: 8,
      ease: "linear",
      onUpdate: (latest) => {
        if (latest === text?.length) {
          setAnimationCompleted(true);
          if (onComplete) onComplete(); 
        }
      },
    });

    return controls.stop;
  }, [count, text, onComplete]);

  return (
    <p className={animationCompleted ? "animation-completed" : ""}>
      <motion.span>{displayText}</motion.span>
    </p>
  );
}
