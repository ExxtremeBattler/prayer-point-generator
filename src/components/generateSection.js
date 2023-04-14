import React from "react";
import { useState } from "react";
import prayerTopics from "../prayerTopics.json"
import axios from "axios";

let verseAddress1 = "john3:16"
let verseAddress2 = "john3:16"
let verseAddress3 = "john3:16"



let BASE_URL = "https://bible-api.com/"  + verseAddress1
let BASE_URL2 = "https://bible-api.com/" + verseAddress2
let BASE_URL3 = "https://bible-api.com/" + verseAddress3

// https://bible-api.com/psalm 100:4




// const topic = (prayerTopics[Math.floor(Math.random() * prayerTopics.length)])
const topic = "Thanksgiving"


function chooseVerses() {
  if (topic.toLowerCase() === "thanksgiving") {
    console.log("code geass");
    BASE_URL = "https://bible-api.com/1 thessalonians 5:18"
    BASE_URL2 = "https://bible-api.com/psalm 100:4"
    BASE_URL3 = "https://bible-api.com/colossians+2:6-7"
  } 
}

chooseVerses()





function GenerateSection() {

  const [topicVerse, setTopicVerse] = useState("")
  const [topicVerse2, setTopicVerse2] = useState("")
  const [topicVerse3, setTopicVerse3] = useState("")


  // const getVerse = async () =>{
  //   const resp = await axios.get(`${BASE_URL}`)
  //   setTopicVerse(resp.data.text + "format check")
  //   console.log(topicVerse);
  // }

  let urls = [BASE_URL, BASE_URL2, BASE_URL3]

  const getVerses = async() => {
    const requests = urls.map((url) => axios.get(url));

 axios.all(requests).then((responses) => {

  responses.forEach(resp => {

    if (responses.indexOf(resp) === 0) {
      console.log(resp.data.text);
    setTopicVerse(resp.data.text)
    } 
    else if(responses.indexOf(resp) === 1){
      console.log(resp.data.text);
      setTopicVerse2(resp.data.text)
    }
    else{
      console.log(resp.data.text);
      setTopicVerse3(resp.data.text)
    }
    
  });
 })}
 
 
  
  getVerses()


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
            value={ topicVerse 
              + "\n" + topicVerse2 
              + "\n" + topicVerse3}
            placeholder="Your Scriptures"
            aria-label="Generated Password"
          ></textarea>
        </div>
    )
}

export default GenerateSection