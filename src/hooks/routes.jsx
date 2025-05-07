import React from "react";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { HomeAutenticada } from "../pages/HomeAutenticada/HomeAutenticada";
import { Route, Routes } from "react-router-dom";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<HomeAutenticada />} />
    </Routes>
  );
};

export { RoutesComponent };
