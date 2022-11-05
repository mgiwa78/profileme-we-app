import "./App.css";
import React from "react";
import { GlobalStyles } from "./styles/globalstyles";
import { GlobalStyleComponent } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./routes/landing-page/landing-page.components";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
