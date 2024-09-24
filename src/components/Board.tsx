// src/components/Board.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "./List";
import { RootState } from "../store";
import { clearBoard } from "../slices/listsSlice";

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.lists.lists);

  return (
    <div className="mt-20 grid grid-cols-3 gap-4 overflow-auto p-8">
      {lists.map((list) => (
        <List key={list.id} listId={list.id} title={list.title} />
      ))}
    </div>
  );
};

export default Board;
