import React from "react";
import { useState } from "react";
import prayerTopics from "../prayerTopics.json"
import axios from "axios";

const BASE_URL = "https://bible-api.com/john3:16"

let topicVerse = ""



  const getVerse = async () =>{
    const resp = await axios.get(`${BASE_URL}`)
    topicVerse = resp.data.text
    console.log(topicVerse);
  }


getVerse()

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