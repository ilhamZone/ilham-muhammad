"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import useScrollProgress from "@/hooks/useScrollProgress";

const template = ({ children }: { children: ReactNode }) => {
  const completion = useScrollProgress();
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
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      />
    </>
  );
};
export default template;
