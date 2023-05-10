import React from 'react';
import Header from './components/Header.js';
import GenerateSection from './components/GenerateSection.js';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import MainMenu from './components/mainMenu.js';
import FlowsSection from './components/FlowsSection.js';
import Ephesians from './components/Ephesians.js';



function App() {
  return (
    <Router>

    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element = {<MainMenu />} />
        <Route path="Generate" element={<GenerateSection />} />
        <Route path="flows" element={<FlowsSection />} />
        {/* <Route path="..Ephesians" element={<Ephesians />} />  this ain't working yet - why?*/}


      </Routes>
      
    </div>

    </Router>
  )
}

export default App;
