import React, { useState } from 'react';
import Intro from './Intro.js';
import App from '../App.js';


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
    <div className="padding">
      <Intro
        inputCb={updateInput}
        title="About Me"
        inputLine="I used to be frightened by anything 'technical', now it's my creative outlet."
      />
      <div>
        <p>insert example</p>
      </div>
    </div>
  );
}

export default  About;