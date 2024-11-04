import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Homepage from "./pages/Home/homepage";
import About from "./pages/About";
import Resume from "./pages/Resume/resume";
import { Routes, Route } from "react-router-dom";
import notes from "./pages/Home/ProfileNote";

const App = (() => {
  return (
    <div>
      <Header />
      <Routes>
      /*here notes is working as props*/
        <Route path="/" element={<Homepage notes={notes} />} />
        <Route path="Homepage" element={<Homepage notes={notes} />} />
        <Route path="Homepage" element={<Homepage />} />
        <Route path="About" element={<About />} />
        <Route path="Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
})

export default App;
