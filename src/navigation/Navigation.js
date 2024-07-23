import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import About from "../pages/about/About";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Logement from "../pages/logement/Logement";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/error" element={<Error />} />
          <Route exact path="/logement/:id" element={<Logement />} />
          <Route exact path="/*" element={<Navigate replace to="/error" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
