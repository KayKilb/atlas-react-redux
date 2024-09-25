// src/components/DeleteListButton.tsx
import React from "react";
import delListButton from "../assets/delListButton.svg";

interface DeleteListButtonProps {
  onDelete: () => void;
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ onDelete }) => {
  return (
    <button onClick={onDelete} className="absolute right-2 top-2">
      <img src={delListButton} alt="Delete List" className="h-6 w-6" />
    </button>
  );
};

export default DeleteListButton;
