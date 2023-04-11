import React from "react";
import { useState } from "react";
import prayerTopics from "../prayerTopics.json"

let topic = ""


function GenerateSection() {

  const [prayerTopic, setPrayerTopic] = useState(prayerTopics[Math.floor(Math.random() * prayerTopics.length)])


    return(
        <div class="card">
        <div class="card-header">
          <h2>Generate a Prayer Point!</h2>
        </div>
        <textarea
            readonly
            id="password"
            value={prayerTopic}
            placeholder="Your Prayer"
            aria-label="Generated Password"
          ></textarea>
        </div>
    )
}

export default GenerateSection