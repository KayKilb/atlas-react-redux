// src/components/DeleteListButton.tsx
import React from "react";

interface DeleteListButtonProps {
  onDelete: () => void; // pass func to handle deletion
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="bg-blue-900 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="white"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default DeleteListButton;
