// src/components/Board.tsx
import React, { useState } from "react";
import List from "./List";

interface ListType {
  id: number;
  title: string;
}

const Board: React.FC = () => {
  const [lists, setLists] = useState<ListType[]>([
    { id: 1, title: "To Do" },
    { id: 2, title: "To Do" },
    { id: 3, title: "To Do" },
    { id: 4, title: "To Do" },
  ]);

  const deleteList = (id: number) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {lists.map((list) => (
        <List
          key={list.id}
          title={list.title}
          onDeleteList={() => deleteList(list.id)}
        />
      ))}
    </div>
  );
};

export default Board;
