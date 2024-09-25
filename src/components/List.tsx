// src/components/List.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import { addCardToList } from "../slices/listsSlice";
import { RootState } from "../store";
import DeleteListButton from "./DeleteListButton";
import { createCard } from "../slices/cardsSlice";

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

  const handleAddCard = (title: string, description: string) => {
    const newCardId = uuidv4();
    dispatch(createCard({ title, description }));
    dispatch(addCardToList({ listId, cardId: newCardId }));
  };

  return (
    <div className="bg-blue-900 text-blue-900 group relative rounded-lg p-4 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
        <DeleteListButton onDelete={() => dispatch(deleteList({ listId }))} />
      </div>

      <div className="space-y-4">
        {cardIds.map((cardId) => {
          const card = cards[cardId];
          if (!card) return null;
          return (
            <Card
              key={cardId}
              cardId={cardId}
              title={card.title}
              description={card.description}
              onDelete={() => dispatch(deleteCard({ cardId }))}
            />
          );
        })}
      </div>

      <NewCardForm onSave={handleAddCard} />
    </div>
  );
};

export default List;
