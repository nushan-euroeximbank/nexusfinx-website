'use client';
import { useEffect } from "react";
// import ReactPixel from "react-facebook-pixel"; // Removed static import

const PixelTracker = () => {
  useEffect(() => {
    const pixelId = "9815464585199304";
    import('react-facebook-pixel')
      .then((module) => module.default)
      .then((ReactPixel) => {
        // It's good practice to check if ReactPixel was loaded successfully
        if (ReactPixel && typeof ReactPixel.init === 'function') {
          ReactPixel.init(pixelId);
          ReactPixel.pageView();
        } else {
          console.error("ReactPixel not loaded or init function missing");
        }
      })
      .catch((e) => console.error("Failed to load ReactPixel module:", e));
  }, []);
  return null;
};

export default PixelTracker;
