// src/components/NewCardForm.tsx
import React, { useState } from "react";

interface NewCardFormProps {
  onSave: (title: string, description: string) => void; // Function that handles the save action
}

const NewCardForm: React.FC<NewCardFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onSave(title, description);
      setTitle(""); // Clears form after submission
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start rounded bg-off-white-light p-8 shadow-md"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 w-full resize-none border-0 bg-off-white-light text-xl font-black text-blue placeholder:text-gray-400 focus:outline-none"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-6 w-full resize-none border-0 bg-off-white-light text-lg text-blue placeholder:text-gray-400 focus:outline-none"
        rows={4}
      />
      <button
        type="submit"
        className="bg-blue-900 ml-auto rounded px-6 py-2 text-xl font-semibold text-off-white-light"
      >
        Save
      </button>
    </form>
  );
};

export default NewCardForm;
