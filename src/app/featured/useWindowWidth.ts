"use client";
import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Ensure the effect only runs in the client-side environment
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Set initial window width
      handleResize();
      window.addEventListener("resize", handleResize); // Add event listener for window resize


      // Remove event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  return { windowWidth, setWindowWidth };
};

export default useWindowWidth;
