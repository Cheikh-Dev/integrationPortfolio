import React from 'react'
import './App.css'

import Navbar from './components/Navbar';
// import Section1 from './components/Section1'

import background from "./assets/background.png";

export default function App() {

  return (
    <>
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Navbar />
          {/* <Section1/> */}
        </div>
    </>
  );
}