import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./compoments/header";
// import PortfolioFooter from "./compoments/footer";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <PortfolioFooter /> */}
    </>
  );
}

export default App;
