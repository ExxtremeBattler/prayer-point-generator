import React from "react";
import { useState } from "react";
import prayerTopics from "../prayerTopics.json"
import axios from "axios";

let verseAddress1 = "john3:16"
let verseAddress2 = "john3:16"
let verseAddress3 = "john3:16"



let BASE_URL = "https://bible-api.com/" 
let BASE_URL2 = "https://bible-api.com/" + verseAddress2
let BASE_URL3 = "https://bible-api.com/" + verseAddress3

// https://bible-api.com/1 thessalonians 5:18




// const topic = (prayerTopics[Math.floor(Math.random() * prayerTopics.length)])
const topic = "Thanksgiving"


function chooseVerses() {
  if (topic.toLowerCase() === "thanksgiving") {
    console.log("code geass");
    verseAddress1 = "1 thessalonians 5:18"
  } 
}




function GenerateSection() {

  const [topicVerse, setTopicVerse] = useState("")

  // const getVerse = async () =>{
  //   const resp = await axios.get(`${BASE_URL}`)
  //   setTopicVerse(resp.data.text + "format check")
  //   console.log(topicVerse);
  // }

  const getVerse = () =>{
    axios({
      method: 'get',
      url: BASE_URL + verseAddress1,
    })
      .then(function (response) {
        console.log(response.data.text);
        setTopicVerse(response.data.text)
      });
  }
  
  chooseVerses()
  getVerse()


    return(
        <div class="card">
        <div class="card-header">
          <h2>Generate a Prayer Point!</h2>
        </div>
        <textarea
            readonly
            id="prayer"
            value={topic}
            placeholder="Your Prayer"
            aria-label="Generated Password"
          ></textarea>

        <textarea
            readonly
            id="prayer"
            className="verses"
            value={topicVerse}
            placeholder="Your Scriptures"
            aria-label="Generated Password"
          ></textarea>
        </div>
    )
}

export default GenerateSection