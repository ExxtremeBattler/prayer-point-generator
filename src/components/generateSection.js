import React from "react";

function getPrayer() {
    
}


function generateSection() {
    return(
        <div class="card">
        <div class="card-header">
          <h2>Generate a Password</h2>
        </div>
        <textarea
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
          <button onclick="getPasswordOptions()" id="generate" className="btn"> Generate Password</button>
        </div>
    )
}

export default generateSection