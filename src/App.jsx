import React, { useContext, useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Nest from "./pages/Nest";
import OneNest from "./pages/Nest/OneNest";
import TwoNest from "./pages/Nest/TwoNest";
import MealIndex from "./pages/Meat/Index";
import MealShow from "./pages/Meat/Show";
function App () {

  return (
    <div className="container mx-auto w-screen ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meat" element={<MealIndex />} />
          <Route path="/meat/:id" element={<MealShow />} />
          <Route path="/contact/:id" element={<Contact />} />
          <Route path="/nest" element={<Nest />} >
            <Route index element={<OneNest />} />
            <Route path="two" element={<TwoNest />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div >

  );
}
export default App;
