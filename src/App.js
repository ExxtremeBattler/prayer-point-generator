// npm imports
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"

// Styling
import './App.css';


// Base imports
import MainMenu from './components/mainMenu.js';
import Header from './components/Header.js';

// POINTS
import GenerateSection from './components/GenerateSection.js';

// FLOWS
import FlowsSection from './components/FlowsSection.js';
import Ephesians from './components/flows/Ephesians.js';
import OurFather from './components/flows/OurFather.js';
import Timothy from './components/flows/Timothy';



function App() {
  return (
    <Router>

    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element = {<MainMenu />} />
        <Route path="Generate" element={<GenerateSection />} />
        <Route path="flows" element={<FlowsSection />} />
        <Route path="/Flows/Ephesians" element={<Ephesians />} /> 
        <Route path="/Flows/OurFather" element={<OurFather />} />  
        <Route path="/Flows/Timothy" element={<Timothy />} />  



      </Routes>
      
    </div>

    </Router>
  )
}

export default App;
