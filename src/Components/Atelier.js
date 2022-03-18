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


const Atelier = () => {
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
          <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647481725/Atelier.gif" style={styles.img}  alt="atelier gif" />
      </div>
    </div>
  );
}

export default Atelier;

