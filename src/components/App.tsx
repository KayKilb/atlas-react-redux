// src/components/App.tsx
import React, { useState } from "react";
import Header from "./Header.tsx";
import Board from "./Board.tsx";
import Footer from "./Footer.tsx";

interface ListType {
  id: number;
  title: string;
}

const App: React.FC = () => {
  const [lists, setLists] = useState<ListType[]>([
    { id: 1, title: "To Do" },
    { id: 2, title: "To Do" },
    { id: 3, title: "To Do" },
  ]);

  const addList = (title: string) => {
    setLists([...lists, { id: lists.length + 1, title }]);
  };

  const clearBoard = () => {
    setLists([]);
  };

  return (
    <div className="min-h-screen bg-off-white-light text-blue">
      {/* Header */}
      <Header />

      {/* Board */}
      <div className="bg-blue-900 p-4 text-off-white-light">
        <Board lists={lists} setLists={setLists} />
      </div>

      {/* Footer */}
      <Footer onAddList={addList} onClearBoard={clearBoard} />
    </div>
  );
};

export default App;
