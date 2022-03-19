import React, { useState } from 'react';
import Intro from './Intro.js';
import App from '../App.js';

const styles = {
  img: {
    width: "100%",
    height: "50%",
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
        inputLine="A full-stack app created on by a distrubted team using Agile. Sounders can record, remix and share music with friends! <a href=https://github.com/Maggie-Mango/Soundtok-Front download>(Github)</a>"
      />
      <div style={styles.soundtok}>
        <h3>Schema</h3>
          <p>I was responsible for creating the database, API and the queries using Postgres for all frontend features. The whole backend was deployed using AWS EC2 and CircleCI (CI/CD). I also created our public API <a href="https://documenter.getpostman.com/view/14811382/UVkvJsHr">documentation</a>, available for public use.</p>
          <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647477570/Schema_ecyebg.png" style={styles.img}  alt="schema" />
          <h3>Feed</h3>
          <p>Customers can post their songs directly on the feed or be re-directed to the Studio to edit their sounds. The feed shows other member posts. You can search by user or hashtags.</p>
          <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647477560/Feed_lvgqs8.gif" style={styles.img}  alt="feed gif" />
          <h3>Editing</h3>
          <p>The editing studio let's you layer and manipulate your music tracks. Once done, you can post it right on the feed if you want. All drafts are stored until you're ready to post.</p>
          <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647477564/Drafts_m4pgyg.gif" style={styles.img}  alt="drafts gif" />
          <h3>Social</h3>
          <p>Search by hashtag shows you related music projects with the same tag. You can search songs by vibe.</p>
          <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647477567/Hashtags_we1fd5.png" style={styles.img}  alt="hashtag" />
      </div>
    </div>
  );
}


export default Soundtok