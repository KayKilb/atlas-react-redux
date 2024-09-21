// store.js
import { configureStore } from "@reduxjs/toolkit";

// Example slice, need to create slices for my app state
const store = configureStore({
  reducer: {
    // Add my slices/reducer here
  },
});

export default store;
