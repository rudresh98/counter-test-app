import React from "react";
import { Route } from "react-router-dom";
import Weather from "../components/Weather/Weather";
import InputTest from "../components/InputTest";
import { Routes } from "react-router-dom";
const RoutesComp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/inputtest" element={<InputTest />} />
      </Routes>
    </div>
  );
};

export default RoutesComp;
