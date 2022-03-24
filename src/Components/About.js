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
        inputLine="Hello World! If you're in NYC, let's grab coffee ☕"
      />
      <div>
        <img src="https://res.cloudinary.com/dousz4spf/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative/v1647637759/7A8CBDCE-7A7E-42DC-A98E-4D854C6BF2CF_skvr2c.jpg" style={styles.img}  alt="atelier gif" />
        <h1>Introduction</h1>
          <p>Growing up I was a naturally curious kid who always pestered adults with philosophical questions on how the world worked. My late teens and most of my 20s were marked with books and travels around Latin America and Asia, where I sought to surround myself with perspectives unlike my own. While my experiences weren't always comfortable, I thrived in environments where I was constantly learning something new.</p>
          <p>Fast-forward to 2020 where my life, as did the rest of the world, came to a screeching halt. With quiet time came introspection. As days turned into weeks and weeks turned into months, I kept toying with the idea of learning how to program. Before the pandemic, I had fruitlessly tried to teach myself Ruby, Python and web development on my own but was frustrated by my slow progress. My first tech role intro'd me to Sql but also shook my confidence since I felt like an imposter surrounded by tech whizzes (it wasn't until I started a new position in a different company that I realized I actually had a good grasp of advanced syntax). Contributing to my insecurities, I was the first in my immediate family to finish higher education and also the first to have a white collar career. Becoming an Engineer felt like it was <i>too</i> out of my realm.</p>
          <p>Despite my imposter syndrome and anxiety around the large financial cost, I enrolled into an advanced online software engineering bootcamp. Even as I began to attend courses, I felt uncomfortable throughout every sprint in the Junior phase. This discomfort with the unknown, however, sparked a familiar feeling of curosity I used to cultivate. Soon, nothing felt more satisfying than spending days solving a bug and seeing the end-result of a program I had worked hard to build. Importantly, learning to program helped me remember the familiar feeling of "loving to learn" and by the final sprint, unknown technical concepts inspired curiosity rather than self-doubt and fear.</p>
          <p>TLDR; I love learning, technology, and am more than ready to become a thoughtful engineer.</p>
          <h2>Where I'm From</h2>
          <p>Born in Manila, Philippines 🇵🇭 || Grown in Portland, OR 🌲</p>
          <h2>Where do you live?</h2>
          <p>NYC, there's no city like it ;)</p>
          <h2>What are your favorite hobbies?</h2>
          <p>Currently, my favorite hobbies are building things with React, visualizing data in a beautiful way, cooking/hosting dinner parties, and trying new whiskies. When I had a bike, long-distance cycling also brought me joy.</p>
          <h2>Why do you want to be a software engineer?</h2>
          <p>Having the ability to build the app or feature you wish existed feels like a superpower. I also love to teach and enjoy breaking down data science and programming concepts for those who want to learn.</p>
          <h2>What languages and frameworks do you like best?</h2>
          <p>To be vague, I enjoy both backend and frontend languages. My position at Stripe and querying languages were my gateway drug into understanding technology. As of late, I've enjoyed learning modern React syntax. I am open to learning so much more.</p>
      </div>
    </div>
    </>
  );
}

export default  About;