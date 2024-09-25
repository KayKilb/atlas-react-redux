// src/components/DeleteCardButton.tsx
import React from "react";
import delCardButton from "../assets/delCardButton.svg"; // Use the delete card icon

interface DeleteCardButtonProps {
  onDelete: () => void;
}

const DeleteCardButton: React.FC<DeleteCardButtonProps> = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="absolute right-2 top-2 focus:outline-none"
    >
      <img
        src={delCardButton}
        alt="Delete Card"
        className="h-6 w-6 hover:opacity-80"
      />
    </button>
  );
};

export default DeleteCardButton;
