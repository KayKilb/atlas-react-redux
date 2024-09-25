// src/components/NewCardForm.tsx
import React, { useState } from "react";

interface NewCardFormProps {
  onSave: (title: string, description: string) => void;
}

const NewCardForm: React.FC<NewCardFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onSave(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-blue-900 rounded border p-2 font-bold"
        // font-bold for the bold title
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="text-blue-900 rounded border p-2"
        rows={3}
        // text-blue-900 for dark blue description text
      />
      <button
        type="submit"
        className="bg-blue-900 rounded px-4 py-2 text-white"
      >
        Save
      </button>
    </form>
  );
};

export default NewCardForm;
