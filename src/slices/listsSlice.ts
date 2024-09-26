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
  lists: [
    { id: uuidv4(), title: "To Do", cardIds: [] },
    { id: uuidv4(), title: "In Progress", cardIds: [] },
    { id: uuidv4(), title: "Done", cardIds: [] },
  ],
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    /**
     * Adds a new list to the board.
     * @param state - Current state of lists.
     * @param action - Contains the title of the new list.
     */
    addList: (state, action: PayloadAction<{ title: string }>) => {
      const newList: List = {
        id: uuidv4(),
        title: action.payload.title,
        cardIds: [],
      };
      state.lists.push(newList);
    },

    /**
     * Deletes a list from the board.
     * @param state - Current state of lists.
     * @param action - Contains the ID of the list to be deleted.
     */
    deleteList: (state, action: PayloadAction<{ listId: string }>) => {
      state.lists = state.lists.filter(
        (list) => list.id !== action.payload.listId,
      );
    },

    /**
     * Adds a card ID to a specific list.
     * @param state - Current state of lists.
     * @param action - Contains the list ID and the card ID to be added.
     */
    addCardToList: (
      state,
      action: PayloadAction<{ listId: string; cardId: string }>,
    ) => {
      const list = state.lists.find((lst) => lst.id === action.payload.listId);
      if (list) {
        list.cardIds.push(action.payload.cardId);
      }
    },

    /**
     * Clears all lists from the board.
     * Note: This action only clears lists. Cards should be cleared separately in the cards slice.
     * @param state - Current state of lists.
     */
    clearBoard: (state) => {
      state.lists = [];
    },
  },
});

export const { addList, deleteList, addCardToList, clearBoard } =
  listsSlice.actions;
export default listsSlice.reducer;
