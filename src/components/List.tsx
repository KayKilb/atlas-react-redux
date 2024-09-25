// src/components/List.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import { addCardToList, deleteList } from "../slices/listsSlice";
import { RootState } from "../store";

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
    <div className="bg-blue-900 p-4 text-white shadow-md">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>

      {/* Delete List Button */}
      <button
        onClick={() => dispatch(deleteList({ listId }))}
        className="bg-red-500 rounded-full p-2 text-white"
      >
        X
      </button>

      {/* Cards */}
      <div className="space-y-4">
        {cardIds.map((cardId) => (
          <Card
            key={cardId}
            cardId={cardId}
            title={cards[cardId].title}
            description={cards[cardId].description}
          />
        ))}
      </div>

      {/* New Card Form */}
      <NewCardForm
        onSave={(title, description) => {
          // Dispatch the action to add a card to this list
          dispatch(addCardToList({ listId, title, description }));
        }}
      />
    </div>
  );
};

export default List;
