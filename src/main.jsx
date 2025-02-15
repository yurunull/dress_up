import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // App.jsxのパスを正確に指定
import "./index.css";

console.log("main.jsx is running");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
