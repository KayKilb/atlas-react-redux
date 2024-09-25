// src/components/Card.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../slices/cardsSlice";
import DeleteCardButton from "./DeleteCardButton"; // Import the delete card button component

interface CardProps {
  cardId: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ cardId, title, description }) => {
  const dispatch = useDispatch();

  return (
    <div className="group relative rounded-lg bg-off-white-light p-4 text-blue shadow-md transition-shadow duration-300 hover:shadow-lg">
      <h5 className="text-xl font-bold">{title}</h5>
      <p>{description}</p>

      {/* Delete button visible on hover */}
      <DeleteCardButton onDelete={() => dispatch(deleteCard({ cardId }))} />
    </div>
  );
};

export default Card;
