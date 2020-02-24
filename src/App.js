import React from "react";
import Home from "./pages";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Home />
      </Wrapper>
    </>
  );
}

