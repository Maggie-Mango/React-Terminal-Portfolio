import React, { useState } from 'react';
import Intro from './Intro.js';
import App from '../App.js';

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
        title="Atelier E-Commerce"
        inputLine="A front-end e-commerce app with customer question + answer and review modals"
      />
      <div>
        <p>insert example</p>
      </div>
    </div>
  );
}

export default APIQuestions;