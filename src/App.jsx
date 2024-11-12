import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchParams from "./SearchParams";
import ContentPage from "./ContentPage";
import React from "react";

const App = () => {
  return (
      <Router>
        <div>
          <h1 style={{ color: 'black' }}>Hey Hey Hey HeyHey </h1>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/content" element={<ContentPage />} />
          </Routes>
        </div>
      </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);