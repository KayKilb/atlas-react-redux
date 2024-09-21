// src/components/Footer.tsx
import React, { useState } from "react";

const Footer: React.FC = () => {
  const [listTitle, setListTitle] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (listTitle.trim() !== "") {
      alert("Create list: ${listTitle}");
      setListTitle(""); // Resets the input field after submission
    }
  };

  const handleClearBoard = () => {
    alert("Clear board");
  };

  return (
    <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="List title"
          name="title"
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="ml-4 rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleClearBoard}
          className="ml-4 rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </footer>
  );
};

export default Footer;
