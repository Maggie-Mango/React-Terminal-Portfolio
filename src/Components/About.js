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
  }
}


const About = () => {
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
    <>
    <div className="padding">
      <Intro
        inputCb={updateInput}
        title="About Me"
        inputLine="I used to be frightened by anything 'technical', now it's my creative outlet."
      />
      <div>
        <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647637759/7A8CBDCE-7A7E-42DC-A98E-4D854C6BF2CF_skvr2c.jpg" style={styles.img}  alt="atelier gif" />
        <h1>Introduction</h1>
          <p>I am a construction business owner, part time marketer, and soon to be web developer.</p>
          <p>I love the internet, technology, and building beautiful things.</p>
      <section class="location-section">
          <h1>Where I'm From</h1>
          <p>I'm originally from Toronto, Ontario. </p>
      </section>
      <section class="questions-section">
          <h1>More About Me</h1>
          <h2>What are your favorite hobbies?</h2>
          <p>My favorite hobby is building things on the internet like ecommerce sites and email marketing campaigns.</p>
          <h2>What's your dream job?</h2>
          <p>My dream job is similar to my current job except I would like to be building software instead of buildings.</p>
          <h2>Where do you live?</h2>
          <p>I live on a rural acreage, but I'm close to Ottawa and Montreal.</p>
          <h2>Why do you want to be a web developer?</h2>
          <p>Because programming is awesome and programming for the internet is even more awesome.</p>
      </section>
      </div>
    </div>
    </>
  );
}

export default  About;