// src/components/App.tsx
import React from "react";
import { Provider } from "react-redux";
import Header from "./Header";
import Board from "./Board";
import Footer from "./Footer";
import store from "../store";

const App: React.FC = () => {
  const handleAddList = (title: string) => {
    // Dispatch action to add a list here
  };

  const handleClearBoard = () => {
    // Dispatch action to clear the board here
  };

  return (
    <Provider store={store}>
      <div className="bg-blue-900 flex min-h-screen flex-col text-off-white-light">
        {/* Fixed Header */}
        <header className="fixed top-0 z-10 w-full">
          <Header />
        </header>

        {/* Scrollable Board */}
        <main className="bg-blue-900 mb-16 mt-24 flex-grow overflow-y-auto p-4">
          <Board />
        </main>

        {/* Fixed Footer */}
        <footer className="fixed bottom-0 z-10 w-full">
          <Footer onAddList={handleAddList} onClearBoard={handleClearBoard} />
        </footer>
      </div>
    </Provider>
  );
};

export default App;
