import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for ReactDOM
import "./index.css";
import reducer, { initialState } from "./reducer";
import App from "./App";
import { DataLayer } from "./DataLayer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);
