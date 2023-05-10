import React from "react";
import ReactDOM from 'react-dom';
import App from "../App";
import { Link } from "react-router-dom";

function MainMenu() {
    return(<div>

        <div id="pointsButton">
            <button > <Link to="Generate"> Generate Prayer Points </Link> </button>
        </div>

        <div id="flowsButton">
            <button> <Link to="Flows"> FLOWS </Link> </button>
        </div>

    </div>)
}


export default MainMenu