import { useEffect, useState, useCallback } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  // Using useCallback to ensure the function is not recreated on each render
  const throttledScrollHandler = useCallback(() => {
    // Using requestAnimationFrame to synchronize with screen refresh rate
    // and reduce unnecessary calculations
    window.requestAnimationFrame(() => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        // Using Math.min to ensure the value doesn't exceed 100
        // and Math.max to ensure the value isn't less than 0
        const calculatedCompletion = Math.min(
          Math.max(
            0,
            Number((currentProgress / scrollHeight).toFixed(2)) * 100
          ),
          100
        );

        setCompletion(calculatedCompletion);
      }
    });
  }, []);

  useEffect(() => {
    // Call handler when component mounts to initialize the value
    throttledScrollHandler();

    // Add event listener with the optimized handler
    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [throttledScrollHandler]);

  return completion;
};

export default useScrollProgress;
