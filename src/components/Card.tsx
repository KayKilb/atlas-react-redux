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
    <div className="group/card relative flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Delete Card Button */}
      <DeleteCardButton onDelete={onDelete} />

      {/* Card Title */}
      <h5 className="my-2 flex w-full items-center justify-between text-xl font-black">
        <span>{title}</span>
      </h5>

      {/* Card Description */}
      <p className="text-blue-900 mt-0 text-left text-lg">{description}</p>
    </div>
  );
};

export default Card;
