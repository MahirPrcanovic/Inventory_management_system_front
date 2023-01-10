import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Materials from "./pages/Materials";
import MaterialDetails from "./pages/MaterialDetails";
const App = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/materials" element={<Materials />} />
      <Route path="/materials/:id" element={<MaterialDetails/>}/>
    </Routes>
  );
};

export default App;
