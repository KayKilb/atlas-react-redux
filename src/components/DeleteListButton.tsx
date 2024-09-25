// src/components/DeleteListButton.tsx
import React from "react";
import delListButton from "../assets/delListButton.svg"; // Use the delete list icon

interface DeleteListButtonProps {
  onDelete: () => void;
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="absolute right-2 top-2 focus:outline-none"
    >
      <img
        src={delListButton}
        alt="Delete List"
        className="h-6 w-6 hover:opacity-80"
      />
    </button>
  );
};

export default DeleteListButton;
