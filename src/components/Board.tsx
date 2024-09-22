// src/components/Board.tsx
import React from "react";
import List from "./List";

interface ListType {
  id: number;
  title: string;
}

interface BoardProps {
  lists: ListType[];
  setLists: React.Dispatch<React.SetStateAction<ListType[]>>;
}

const Board: React.FC<BoardProps> = ({ lists, setLists }) => {
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
