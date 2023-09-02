import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookmarkContextProvider } from "./useContext/BookmarkContext";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BookmarkContextProvider>
      <App />
    </BookmarkContextProvider>
  </React.StrictMode>
);
