"use client";

import { useState } from "react";

// Button to open/watch demo - can be a modal, video, or link to demo page
const ButtonDemo = ({
  text = "Watch Demo",
  extraStyle,
  onClick,
}: {
  text?: string;
  extraStyle?: string;
  onClick?: () => void;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    
    // Default: Scroll to demo section or open modal
    // You can customize this behavior
    setIsLoading(true);
    
    // Example: Scroll to features section where demo might be
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: Open a demo video or modal
      // You can implement your demo logic here
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // Replace with actual demo URL
    }
    
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <button
      className={`cursor-pointer ${extraStyle ? extraStyle : "btn"}`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
          {text}
        </span>
      )}
    </button>
  );
};

export default ButtonDemo;

