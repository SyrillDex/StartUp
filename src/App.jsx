import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

// background-color: rgb(110, 65, 42); -- main

//Bonus Colors
// Cappuccino Cream → #C3B091
// Mocha Tan → #A1887F
// Caramel Drizzle → #D2691E - accent

// Main Colors
// Coffee Bean → #6F4E37 -- primary (buttons)
// Latte Beige → #D7CCC8 -- navbar
// #e2e5ea - background
// Milk Foam White → #F5F5F5 - table color
// Espresso Brown → #4B3832 - tertiary - fontColor
// Dark Roast Black → #2D2D2D - fontColor

//Font Family
// Playfair Display
// Merriweather
// Cormorant Garamond
// Poppins -- sans
// Montserrat -- sans

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
