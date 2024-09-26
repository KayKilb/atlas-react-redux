// src/slices/cardsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Card {
  id: string;
  listId: string;
  title: string;
  description: string;
}

interface CardsState {
  cards: Record<string, Card>;
}

const initialState: CardsState = {
  cards: {
    // Example of pre-populated card
    // [uuidv4()]: {
    //   id: uuidv4(),
    //   listId: "some-list-id",
    //   title: "Sample Task",
    //   description: "This is a sample task description.",
    // },
  },
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    /**
     * Creates a new card and adds it to the cards collection.
     * @param state - Current state of cards.
     * @param action - Contains listId, title, and description for the new card.
     */
    createCard: (
      state,
      action: PayloadAction<{
        listId: string;
        title: string;
        description: string;
      }>,
    ) => {
      const newCard: Card = {
        id: uuidv4(),
        listId: action.payload.listId,
        title: action.payload.title,
        description: action.payload.description,
      };
      state.cards[newCard.id] = newCard;
    },

    /**
     * Deletes a card from the cards collection.
     * @param state - Current state of cards.
     * @param action - Contains the ID of the card to be deleted.
     */
    deleteCard: (state, action: PayloadAction<{ cardId: string }>) => {
      delete state.cards[action.payload.cardId];
    },

    /**
     * Clears all cards from the board.
     * Note: This action only clears cards. Lists should be cleared separately in the lists slice.
     * @param state - Current state of cards.
     */
    clearBoard: (state) => {
      state.cards = {};
    },
  },
});

export const { createCard, deleteCard, clearBoard } = cardsSlice.actions;
export default cardsSlice.reducer;
