// src/slices/cardsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Card {
  id: string;
  title: string;
  description: string;
}

interface CardsState {
  cards: Record<string, Card>;
}

const initialState: CardsState = {
  cards: {},
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    createCard: (
      state,
      action: PayloadAction<{ title: string; description: string }>,
    ) => {
      const newCard: Card = {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
      };
      state.cards[newCard.id] = newCard;
    },
    deleteCard: (state, action: PayloadAction<{ cardId: string }>) => {
      delete state.cards[action.payload.cardId];
    },
    clearBoard: (state) => {
      state.cards = {};
    },
  },
});

export const { createCard, deleteCard, clearBoard } = cardsSlice.actions;
export default cardsSlice.reducer;
