import React from "react";
import { useState } from "react";
import prayerTopics from "../prayerTopics.json"
import axios from "axios";

const BASE_URL = "https://bible-api.com/john3:16"


const topic = (prayerTopics[Math.floor(Math.random() * prayerTopics.length)])


// function V(verseTopic) {
//   if (verseTopic === "Thanksgiving") {

//   } else {
   
//   }
// }


function GenerateSection() {

  const [topicVerse, setTopicVerse] = useState("")

  const getVerse = async () =>{
    const resp = await axios.get(`${BASE_URL}`)
    setTopicVerse(resp.data.text)
    console.log(topicVerse);
  }

  getVerse()


    return(
        <div class="card">
        <div class="card-header">
          <h2>Generate a Prayer Point!</h2>
        </div>
        <textarea
            readonly
            id="password"
            value={topic}
            placeholder="Your Prayer"
            aria-label="Generated Password"
          ></textarea>

        <textarea
            readonly
            id="password"
            value={topicVerse}
            placeholder="Your Scriptures"
            aria-label="Generated Password"
          ></textarea>
        </div>
    )
}

export default GenerateSection