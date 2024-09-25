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
      // Trigger onSave with both title and description
      onSave(title, description);
      setTitle(""); // Clear the title input after save
      setDescription(""); // Clear the description input after save
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start p-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 w-full border-0 bg-transparent text-xl font-black"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 w-full border-0 bg-transparent text-lg"
        rows={3}
      />
      <button type="submit" className="bg-blue-900 text-white">
        Save
      </button>
    </form>
  );
};

export default NewCardForm;
