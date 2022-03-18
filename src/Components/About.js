import React, { useState } from 'react';
import Intro from './Intro.js';
import App from '../App.js';

const styles = {
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "90%",
    opacity: "0.7",
    boxShadow: "1px 2px 3px rgba(0,0,0,.5)"
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
        inputLine="I used to be frightened by anything <i>technical</i>, now it's my creative outlet."
      />
      <div>
        <img src="https://res.cloudinary.com/dousz4spf/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative/v1647637759/7A8CBDCE-7A7E-42DC-A98E-4D854C6BF2CF_skvr2c.jpg" style={styles.img}  alt="atelier gif" />
        <h1>Introduction</h1>
          <p>Growing up I was a naturally curious kid who always pestered adults with philosophical questions on how the world worked. My late teens and most of my 20s were marked with books and travels around Latin America and Asia, where I sought to surround myself with perspectives unlike my own. While my experiences weren't always comfortable, I constantly craved that feeling of learning something new.</p>
          <p>Fast-forward to 2020 where my life, as did the rest of the world, came to a screeching halt. Until then, I was always on the move trying to hustle to my next destination. As days turned into weeks and weeks turned into months, the idea of seriously learning how to program entered my head. Before then, I had fruitlessly tried time and time again teaching myself Ruby, Python and Web development on my own. My first tech role intro'd me to SQL but also shook my confidence since I felt like an imposter surrounded by tech geniuses (it wasn't until I started a new position in a different company that I realized I actually had a good grasp of the syntax I taught myself). Playing into my insecurities, I was the first in my immediate family to finish higher education and also the first to have a white collar career. Becoming an Engineer felt like it was <i>too</i> out of my realm.</p>
          <p>Despite my insecurities and feeling ill about the large financial cost, I enrolled into an advanced online bootcamp during the Pandemic. Though I felt a lot of anxiety about this decision and uncomfortable throughout every sprint in the Junior phase, my curiousity to learn new technologies grew. Soon, nothing felt more satisfying than spending days solving a bug and seeing the end-result of a program I had worked hard to build. Importantly, learning to program helped me remember the familiar feeling of "loving to learn" and by the end of the program, unknown technical concepts struck curiosity rather than self-doubt and fear.</p>
          <p>TLDR; I love learning, technology, and am more than ready to become the best darn Software Enginner I can be.</p>
          <h2>Where I'm From</h2>
          <p>Born in Manila, Philippines 🇵🇭 || Grown in Portland, OR 🌲</p>
          <h2>Where do you live?</h2>
          <p>NYC, there's no place like it ;)</p>
          <h2>What are your favorite hobbies?</h2>
          <p>My favorite hobby is building things with React, cooking/hosting dinner parties, and trying new whiskies</p>
          <h2>Why do you want to be a web developer?</h2>
          <p>There's nothing more gratifying than having the ability to build the app or feature you wish existed</p>
      </div>
    </div>
    </>
  );
}

export default  About;