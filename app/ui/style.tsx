import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary"; // Define different button types
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = "primary", onClick  }) => {
  const baseStyles = "px-6 py-2 font-semibold rounded-full transition-all duration-300 ";
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 mt-5",
    secondary: "bg-white text-blue-900 border border-purple-900 hover:bg-purple-600 hover:text-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
