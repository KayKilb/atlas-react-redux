// src/__tests__/listsSlice.test.ts
import { describe, it, expect } from "vitest";
import listsReducer, {
  addList,
  deleteList,
  addCardToList,
  clearBoard,
} from "../slices/listsSlice";

describe("listsSlice", () => {
  let initialState: ReturnType<typeof listsReducer>;

  beforeEach(() => {
    initialState = {
      lists: [
        { id: "list-1", title: "To Do", cardIds: [] },
        { id: "list-2", title: "In Progress", cardIds: [] },
        { id: "list-3", title: "Done", cardIds: [] },
      ],
    };
  });

  it("should return the initial state", () => {
    expect(listsReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addList", () => {
    const action = addList({ title: "New List" });
    const state = listsReducer(initialState, action);
    expect(state.lists.length).toBe(4);

    const newList = state.lists[3];
    expect(newList.title).toBe("New List");
    expect(newList.cardIds).toEqual([]);
    expect(newList.id).toBeTruthy(); // Ensures that an ID was generated
  });

  it("should handle deleteList", () => {
    const action = deleteList({ listId: "list-2" });
    const state = listsReducer(initialState, action);
    expect(state.lists.length).toBe(2);
    expect(state.lists.find((list) => list.id === "list-2")).toBeUndefined();
  });

  it("should handle addCardToList", () => {
    const action = addCardToList({ listId: "list-1", cardId: "card-1" });
    const state = listsReducer(initialState, action);
    const list = state.lists.find((list) => list.id === "list-1");
    expect(list?.cardIds).toContain("card-1");
  });

  it("should handle clearBoard", () => {
    const action = clearBoard();
    const state = listsReducer(initialState, action);
    expect(state.lists.length).toBe(0);
  });
});
