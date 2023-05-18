import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Ephesians from "./flows/Ephesians";


function FlowsSection() {

    return(<div>

        <p> Welcome to FLOWS. Here you can select a group of prayer points and scriptures to use all in one session;
            the points will FLOW into one another as the session progresses.

            Pick a FLOW below:

        </p>

        <button> <Link to="Ephesians"> The Ephesians FLOW </Link> </button>
        <button> <Link to="OurFather"> The Our Father FLOW </Link> </button>
        <button> <Link to="Timothy"> The Timothy FLOW </Link> </button>

        <Routes>
            <Route path = "Ephesians" element = {<Ephesians />}></Route>
        </Routes>



    </div>)
    
}

export default FlowsSection