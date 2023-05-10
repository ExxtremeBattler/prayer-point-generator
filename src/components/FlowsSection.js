import React from "react";
import { Link } from "react-router-dom";


function FlowsSection() {

    return(<div>

        <p> Welcome to FLOWS. Here you can select a group of prayer points and scriptures to use all in one session;
            the points will FLOW into one another as the session progresses.

            Pick a FLOW below:

        </p>

        <button> <Link to="Epehsians"> The Ephesians FLOW </Link> </button>
        <button> <Link to="OurFather"> The Our Father FLOW </Link> </button>
        <button> <Link to="Timothy"> The Timothy FLOW </Link> </button>



    </div>)
    
}

export default FlowsSection