// src/components/Card.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../slices/cardsSlice";
import delCardButton from "../assets/delCardButton.svg"; // Import the delete icon

interface CardProps {
  cardId: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ cardId, title, description }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-lg bg-off-white-light p-4 text-blue shadow-md transition-shadow duration-300 hover:shadow-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h5 className="flex justify-between text-xl font-black">
        {title}
        {/* Delete button visible on hover */}
        {isHovered && (
          <button
            onClick={() => dispatch(deleteCard({ cardId }))}
            className="absolute right-2 top-2"
          >
            <img src={delCardButton} alt="Delete Card" className="h-6 w-6" />
          </button>
        )}
      </h5>
      <p>{description}</p>
    </div>
  );
};

export default Card;
