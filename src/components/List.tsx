// src/components/List.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import { addCardToList, deleteList } from "../slices/listsSlice";
import { RootState } from "../store";
import DeleteListButton from "./DeleteListButton";

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
  const cards = useSelector((state: RootState) => state.cards.cards);

  return (
    <div className="bg-blue-900 group relative rounded-lg p-4 text-white shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
        {/* Delete button visible on hover */}
        <DeleteListButton onDelete={() => dispatch(deleteList({ listId }))} />
      </div>

      <div className="space-y-4">
        {cardIds.map((cardId) => {
          const card = cards[cardId];
          if (!card) return null; // Handle case where card might not exist
          return (
            <Card
              key={cardId}
              cardId={cardId}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>

      <NewCardForm
        onSave={(title, description) => {
          dispatch(addCardToList({ listId, title, description }));
        }}
      />
    </div>
  );
};

export default List;
