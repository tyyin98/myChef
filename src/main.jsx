import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HomePageProvdier } from "./contexts/HomePageContexts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-screen bg-yellow-200 font-serif">
      <HomePageProvdier>
        <App />
      </HomePageProvdier>
    </div>
  </React.StrictMode>,
);
