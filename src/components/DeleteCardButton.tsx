// src/components/DeleteCardButton.tsx
import React from "react";

interface DeleteCardButtonProps {
  onDelete: () => void;
}

const DeleteCardButton: React.FC<DeleteCardButtonProps> = ({ onDelete }) => {
  return (
    <button onClick={onDelete} className="focus:outline-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="text-blue-900 hover:text-blue-700 h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
        <path d="M3 6h18M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2m-6 0h6m1 14a2 2 0 01-2 2H9a2 2 0 01-2-2V6h10v14z" />
      </svg>
    </button>
  );
};

export default DeleteCardButton;
