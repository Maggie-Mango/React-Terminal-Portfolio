import React, { useState } from 'react';
import Intro from './Intro.js';
import App from '../App.js';

const styles = {
  img: {
    width: "60%",
    height: "50%",
    padding: "0 20px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "20px",
    display: "block"
  },
  grid: {
    display: "grid",
    gridTemplateRows: "repeat(99, 50px)",
    GridTemplateColumns: "repeat(8, 1fr)"
  }
}

const Soundtok = () => {
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
        title="SoundTok"
        inputLine="A full-stack app created with 5 engineers. Sounders can record, remix and share music with friends!"
      />
      <div>
          <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647477570/Schema_ecyebg.png" style={styles.img}  alt="schema" />
          <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647477560/Feed_lvgqs8.gif" style={styles.img}  alt="feed gif" />
          <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647477564/Drafts_m4pgyg.gif" style={styles.img}  alt="drafts gif" />
          <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647477567/Hashtags_we1fd5.png" style={styles.img}  alt="hashtag" />
      </div>
    </div>
  );
}


export default Soundtok