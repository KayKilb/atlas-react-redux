// src/components/DeleteListButton.tsx
import React from "react";

interface DeleteListButtonProps {
  onDelete: () => void;
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="hidden h-[30px] w-[30px] cursor-pointer focus:outline-none group-hover/list:block"
      aria-label="Delete List"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-full w-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
};

export default DeleteListButton;
