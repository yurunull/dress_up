import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Header from "./compoments/header";
import Footer from "./compoments/footer";
import Login from "../src/pages/login";
import Add from "../src/pages/add";

const App = () => {
  return (
    <>
    <Header />
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
};

export default App;
