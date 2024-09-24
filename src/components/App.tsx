// src/components/App.tsx
import React from "react";
import { Provider } from "react-redux";
import Header from "./Header";
import Board from "./Board";
import Footer from "./Footer";
import store from "../store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-off-white-light text-blue">
        {/* Header */}
        <Header />

        {/* Board */}
        <div className="bg-blue-900 overflow-auto p-4 text-off-white-light">
          <Board />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
