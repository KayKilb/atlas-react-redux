// src/slices/listsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface List {
  id: string;
  title: string;
  cardIds: string[];
}

interface ListsState {
  lists: List[];
}

const initialState: ListsState = {
  lists: [],
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
      action: PayloadAction<{ listId: string; cardId: string }>,
    ) => {
      const list = state.lists.find(
        (list) => list.id === action.payload.listId,
      );
      if (list) {
        list.cardIds.push(action.payload.cardId);
      }
    },
    clearBoard: (state) => {
      state.lists = [];
    },
  },
});

export const { addList, deleteList, addCardToList, clearBoard } =
  listsSlice.actions;
export default listsSlice.reducer;
