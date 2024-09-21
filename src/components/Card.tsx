// src/components/Card.tsx
import React, { useState } from "react";
import DeleteListButton from "./DeleteListButton"; // Reusing the delete button

interface CardProps {
  title: string;
  description: string;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light p-4 text-blue"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Delete button, shown only when hovered */}
      {isHovered && (
        <div className="absolute right-2 top-2">
          <DeleteListButton onDelete={onDelete} />
        </div>
      )}

      {/* Title and description */}
      <h5 className="my-2 w-full text-xl font-black">{title}</h5>
      <p className="mt-0 text-left">{description}</p>
    </div>
  );
};

export default Card;
