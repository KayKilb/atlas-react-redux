// src/components/List.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { deleteList, addCardToList } from "../slices/listsSlice";
import { RootState } from "../store";
import NewCardForm from "./NewCardForm";

interface ListProps {
  listId: string;
  title: string;
}

const List: React.FC<ListProps> = ({ listId, title }) => {
  const dispatch = useDispatch();
  const cardIds = useSelector(
    (state: RootState) =>
      state.lists.lists.find((list) => list.id === listId)?.cardIds || [],
  );
  const cards = useSelector((state: RootState) => state.lists.cards);

  const handleAddCard = (cardTitle: string, cardDescription: string) => {
    dispatch(
      addCardToList({ listId, title: cardTitle, description: cardDescription }),
    );
  };

  return (
    <div className="bg-blue-900 relative rounded-lg p-4 text-off-white-light">
      <h3 className="mb-4 text-center font-bold">{title}</h3>

      {/* Render cards */}
      {cardIds.map((cardId) => (
        <Card
          key={cardId}
          title={cards[cardId].title}
          description={cards[cardId].description}
        />
      ))}

      {/* Add new card form */}
      <NewCardForm onSave={handleAddCard} />

      {/* Delete list button */}
      <button
        onClick={() => dispatch(deleteList({ listId }))}
        className="absolute right-2 top-2 text-white"
      >
        X
      </button>
    </div>
  );
};

export default List;
