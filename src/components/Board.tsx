// src/components/Board.tsx
import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import { RootState } from "../store";

const Board: React.FC = () => {
  const lists = useSelector((state: RootState) => state.lists.lists);

  return (
    <div className="grid grid-cols-3 gap-6">
      {lists.map((list) => (
        <List key={list.id} listId={list.id} title={list.title} />
      ))}
    </div>
  );
};

export default Board;
