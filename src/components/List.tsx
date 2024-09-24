// src/components/List.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../slices/cardsSlice";
import NewCardForm from "./NewCardForm";

interface ListProps {
  listId: string;
  title: string;
}

const List: React.FC<ListProps> = ({ listId, title }) => {
  const dispatch = useDispatch();

  const handleAddCard = (title: string, description: string) => {
    dispatch(createCard({ title, description }));
  };

  return (
    <div>
      {/* ...list rendering */}
      <NewCardForm onSave={handleAddCard} />
    </div>
  );
};

export default List;
