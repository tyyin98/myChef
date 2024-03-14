import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HomePageProvider } from "./contexts/HomePageProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-screen bg-yellow-200 font-serif">
      <HomePageProvider>
        <App />
      </HomePageProvider>
    </div>
  </React.StrictMode>,
);
