import { useState, useEffect } from "react";

const useWindowWidth = () => {
  // starts as undefined to prevent it from using window object on the server
  const [winWidth, setWinWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => setWinWidth(window.innerWidth);

    // Set the initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return winWidth;
};

export default useWindowWidth;