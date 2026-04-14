"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationVariant = "zoom" | "flip" | "pulse" | "fadeUp";

interface ScrollAnimateProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
}

const variants = {
  zoom: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 },
  },
  pulse: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function ScrollAnimate({
  children,
  variant = "fadeUp",
  delay = 0,
}: ScrollAnimateProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
