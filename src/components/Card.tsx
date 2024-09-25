// src/components/Card.tsx
import React from "react";
import DeleteCardButton from "./DeleteCardButton";

interface CardProps {
  cardId: string;
  title: string;
  description: string;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onDelete }) => {
  return (
    <div className="group relative rounded-lg bg-off-white-light p-4 text-blue shadow-md transition-shadow duration-300 hover:shadow-lg">
      <h5 className="text-blue-900 mb-2 text-xl font-black">
        {/* Title should be bold and dark blue */}
        {title}
      </h5>
      <p className="text-blue-900 text-lg">
        {/* Description should be regular text and dark blue */}
        {description}
      </p>
      {/* Delete button visible on hover */}
      <DeleteCardButton onDelete={onDelete} />
    </div>
  );
};

export default Card;
