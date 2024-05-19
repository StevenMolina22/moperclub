"use client";

import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // handles responsiveness of the slider
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width
    setWindowWidth(window.innerWidth);
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // (Empty dependency array ensures this effect runs only once after component mount)
  return {windowWidth, setWindowWidth};
}

export default useWindowWidth;