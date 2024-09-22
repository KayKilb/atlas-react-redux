// src/components/List.tsx
import React, { useState } from "react";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import DeleteListButton from "./DeleteListButton";

interface CardType {
  title: string;
  description: string;
}

interface ListProps {
  title: string;
  onDeleteList: () => void;
}

const List: React.FC<ListProps> = ({ title, onDeleteList }) => {
  const [cards, setCards] = useState<CardType[]>([
    {
      title: "Lorem ipsum dolor",
      description:
        "Sed viverra, diam eu facilisis bibendum, ante orci placerat quam",
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Sed viverra, diam eu facilisis bibendum, ante orci placerat quam",
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Sed viverra, diam eu facilisis bibendum, ante orci placerat quam",
    },
  ]);
  const [isHovered, setIsHovered] = useState(false);

  const addCard = (title: string, description: string) => {
    setCards([...cards, { title, description }]);
  };

  const deleteCard = (index: number) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  return (
    <div
      className="bg-blue-900 relative rounded-lg p-4 text-off-white-light"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Delete button (appears on hover) */}
      {isHovered && (
        <div className="absolute right-2 top-2">
          <DeleteListButton onDelete={onDeleteList} />
        </div>
      )}

      {/* List title */}
      <h3 className="mb-4 text-center font-bold">{title}</h3>

      {/* Render cards */}
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          onDelete={() => deleteCard(index)}
        />
      ))}

      {/* New card form */}
      <NewCardForm onSave={addCard} />
    </div>
  );
};

export default List;
