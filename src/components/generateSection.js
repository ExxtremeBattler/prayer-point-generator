import React from "react";
import { useState } from "react";
import prayerTopics from "../prayerTopics.json"
import axios from "axios";


// verses are john 3:16 by default

let BASE_URL = "https://bible-api.com/john3:16" 
let BASE_URL2 = "https://bible-api.com/john3:16"
let BASE_URL3 = "https://bible-api.com/john3:16"

// https://bible-api.com/psalm 100:4



//logic for choosing topic
// const topic = (prayerTopics[Math.floor(Math.random() * prayerTopics.length)])
const topic = "The Will of God"


function chooseVerses() {

  //conditional logic for choosing which verses to later fetch, based on the current topic

  if (topic.toLowerCase() === "thanksgiving") {
    console.log("code geass");
    BASE_URL = "https://bible-api.com/1 thessalonians 5:18"
    BASE_URL2 = "https://bible-api.com/psalm 100:4"
    BASE_URL3 = "https://bible-api.com/colossians+2:6-7"
  } 

  else if(topic.toLowerCase().includes("confession")){
    console.log("code geass")
    BASE_URL = "https://bible-api.com/proverbs 28:13"
    BASE_URL2 = "https://bible-api.com/isaiah+1:18-19"
    BASE_URL3 = "https://bible-api.com/1john1:9"

  }

  else if(topic.toLowerCase().includes("kingdom")){
    console.log("code geass");
    BASE_URL = "https://bible-api.com/matthew 6:10"
    BASE_URL2 = "https://bible-api.com/matthew 6:33"
    BASE_URL3 = "https://bible-api.com/luke+17:20-21"

  }

  else if(topic.toLowerCase().includes("will")){
    console.log("code geass");
    BASE_URL = "https://bible-api.com/proverbs+3:5-6"
    BASE_URL2 = "https://bible-api.com/romans 12:2"
    BASE_URL3 = "https://bible-api.com/1 peter 2:15"

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