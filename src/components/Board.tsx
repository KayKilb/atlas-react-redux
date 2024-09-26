// src/components/Board.tsx
import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import { RootState } from "../store";

const Board: React.FC = () => {
  const lists = useSelector((state: RootState) => state.lists.lists);

  return (
    <div className="m-auto h-full w-full overflow-x-auto bg-gray-50 text-center">
      <div className="flex space-x-6">
        {lists.map((list) => (
          <List key={list.id} listId={list.id} title={list.title} />
        ))}
      </div>
    </div>
  );
};

export default Board;
