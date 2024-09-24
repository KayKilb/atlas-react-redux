// src/components/Card.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../slices/cardsSlice";

interface CardProps {
  cardId: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ cardId, title, description }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => dispatch(deleteCard({ cardId }))}>
        Delete Card
      </button>
    </div>
  );
};

export default Card;
