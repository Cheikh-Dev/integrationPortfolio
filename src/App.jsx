import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

import background from "./assets/background.png";

export default function App() {
  return (
    <>
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          className="pb-1"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Navbar />
          <Section1 />
        </div>
      </div>
      <Section2 />
    </>
  );
}
