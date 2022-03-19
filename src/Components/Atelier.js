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
       <div style={styles.soundtok}>
        <div>
          <h3>E-commerce Shop</h3>
          <p>Responsible for creating a robust front-end which included a gallery, pop-up modals, carosuels, sliders and a reliable method for customers to upload photos to their reviews and questions.</p>
            <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647481725/Atelier.gif" style={styles.img}  alt="atelier gif" />
          <h3>Pop-up Review Modal</h3>
          <p>The Modal relied on React Hooks UseState and UseEffect. The modal has the ability to accept 5 photos, has error handling, sliders, buttons, star ratings and multiple choice questions. There is also a ratings system which auto-calculates the meean of user ratings in real-time.</p>
            <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647648124/2022-03-16_22.02.52_avctjr.gif" style={styles.img}  alt="atelier gif" />
        </div>
      </div>
    </div>
  );
}

export default Atelier;

