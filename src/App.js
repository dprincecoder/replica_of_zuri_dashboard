import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, ZuriTrainingPage, ZuriTalentPage } from "./pages";

function App() {
  return (
    <>
      {
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route index element={<LandingPage />}></Route>
            <Route path="/zuri.training" element={<ZuriTrainingPage />}></Route>
            <Route path="/zuri.talent" element={<ZuriTalentPage />}></Route>

            <Route path="*" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
