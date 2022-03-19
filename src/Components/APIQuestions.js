import React, { useState } from 'react';
import Intro from './Intro.js';
import App from '../App.js';

const styles = {
  img: {
    width: "100%",
    height: "100%",
    padding: "0 20px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "20px",
    display: "block"
  },
  soundtok: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "60%"
  }
}

const APIQuestions = () => {
  const [input, setInput] = useState("")

  function updateInput(input) {
    setInput(input)
  }

  if (input.toLowerCase() === "back") {
    return (
      <App />
    )
  }

  return (
    <div className="padding">
    <Intro
          inputCb={updateInput}
          title="QUESTIONS AND ANSWERS API"
          inputLine="A backend API able scaled to handle high customer traffic. Able to plug in with an existing front-end."
        />
       <div style={styles.soundtok}>
        <div>
          <h3>API</h3>
          <p>Creating and scaling this API is thoroughly documented in my Notion <a href="https://aback-draw-7e0.notion.site/71ab63b02d6443f1b04ffd8b36203f84?v=1292a485a2de4973ad6e41b352df9883">journal</a>. This API uses a MySQL database and is able to handle 1,000 requests easily with a 0% error rate. It can also handle around 5,000 - 7,000 requests with around a 30% error rate.</p>
          <h3>Scaling</h3>
          <p>The API used 3 EC2 Servers, query indexing, REDIS caching and an NGINX load balancer. The API was then stressed tested with spikey high volumes of traffic.</p>
            <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647651902/Screen_Shot_2022-03-18_at_9.04.40_PM_cwjebw.png" style={styles.img}  alt="performance" />
        </div>
      </div>
    </div>
  );
}

export default APIQuestions;