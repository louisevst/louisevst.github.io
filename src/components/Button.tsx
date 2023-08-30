import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-1 md:px-8 lg:px-10 bg-red text-dark rounded-2xl md:text-highlight"
    >
      {children}
    </button>
  );
};

export default Button;
