// src/components/App.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "../store.ts";

function App() {
  return (
    <Provider store={store}>
      <>Hello Atlas</>
    </Provider>
  );
}

export default App;
