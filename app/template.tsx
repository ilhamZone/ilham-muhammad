"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import useScrollProgress from "@/hooks/useScrollProgress";

const Template = ({ children }: { children: ReactNode }) => {
  const completion = useScrollProgress();

  // Using useMemo to avoid unnecessary calculations on each render
  const scrollIndicatorStyle = useMemo(() => {
    return { transform: `translateY(${completion - 100}%)` };
  }, [completion]);

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  };

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.main>
      <motion.span
        style={scrollIndicatorStyle}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-transform duration-300"
      />
    </>
  );
};

export default Template;
