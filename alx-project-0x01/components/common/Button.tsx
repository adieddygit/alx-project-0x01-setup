import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void; // click handler passed from the page
  className?: string;   // optional extra Tailwind classes
}

const Button: React.FC<ButtonProps> = ({ title, onClick, className }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        className={`bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition ${className || ""}`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
