// src/slices/listsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Card {
  id: string;
  title: string;
  description: string;
}

interface List {
  id: string;
  title: string;
  cardIds: string[];
}

interface ListsState {
  lists: List[];
  cards: Record<string, Card>; // Mapping card IDs to card details
}

const initialState: ListsState = {
  lists: [],
  cards: {},
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ title: string }>) => {
      const newList: List = {
        id: uuidv4(),
        title: action.payload.title,
        cardIds: [],
      };
      state.lists.push(newList);
    },
    deleteList: (state, action: PayloadAction<{ listId: string }>) => {
      state.lists = state.lists.filter(
        (list) => list.id !== action.payload.listId,
      );
    },
    addCardToList: (
      state,
      action: PayloadAction<{
        listId: string;
        title: string;
        description: string;
      }>,
    ) => {
      const newCard: Card = {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
      };
      state.cards[newCard.id] = newCard;
      const list = state.lists.find(
        (list) => list.id === action.payload.listId,
      );
      if (list) {
        list.cardIds.push(newCard.id);
      }
    },
    clearBoard: (state) => {
      state.lists = [];
      state.cards = {};
    },
  },
});

export const { addList, deleteList, addCardToList, clearBoard } =
  listsSlice.actions;
export default listsSlice.reducer;
