// src/components/Footer.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList, clearBoard } from "../slices/listsSlice";

const Footer: React.FC = () => {
  const [listTitle, setListTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (listTitle.trim()) {
      dispatch(addList({ title: listTitle }));
      setListTitle(""); // Clear the input after submission
    }
  };

  return (
    <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="List title"
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
          onClick={() => dispatch(clearBoard())}
          className="ml-4 rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </footer>
  );
};

export default Footer;
