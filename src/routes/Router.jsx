import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Inspectr } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inspectr" element={<Inspectr />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
