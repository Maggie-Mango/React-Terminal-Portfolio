import React, { useState } from 'react';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';
import Typewriter from 'typewriter-effect';
import Resume from './Components/Resume.js';
import Soundtok from './Components/Soundtok.js';
import Atelier from './Components/Atelier.js';
import About from './Components/About.js';
import APIQuestions from './Components/APIQuestions.js';


  const Openingmessage =
    <>
      <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Hi! 👋 My name is Maggie, a full-stack engineer based in NYC 🗽')
          .pauseFor(2500)
          .start()
      }}
      />
      <br />
    </>

    const instructions =
      <>
        Type the following commands to see more:
        <br />
        <br />
          Resume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          AboutMe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
          Soundtok&nbsp;&nbsp;&nbsp;&nbsp;
          Atelier&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          APIquestions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <br />
      </>





const App = (props = {}) => {
  const terminal = [
    {type: LineType.Output, value: Openingmessage},
    {type: LineType.Output, value: instructions},
    {type: LineType.Input, value: 'Get in touch 💌 maggiesaldivia@gmail.com' }
  ]
  const [terminalLineData, setTerminalLineData] = useState(terminal);
  const [modal, setModal] = useState(null)


  if (modal === 'aboutme') {
    return (
      <>
      <div className="container">
        <About />
      </div>
    </>
    )
  }

  if (modal === 'resume') {
    return (
      <>
      <div className="container">
        <Resume />
      </div>
    </>
    )
  }

  if (modal === 'soundtok') {
    return (
      <>
      <div className="container">
        <Soundtok />
      </div>
      </>
    )
  }

  if (modal === 'atelier') {
    return (
      <>
        <div className="container">
          <Atelier />
        </div>
      </>
    )
  }

  if (modal === 'apiquestions') {
    return (
      <>
      <div class="container">
        <APIQuestions />
      </div>
      </>
    )
  }

  return (
    <div className="container">
      <Terminal
        name='MAGGIE SALDIVIA PORTFOLIO'
        colorMode={ ColorMode.Light }
        lineData={ terminalLineData }
        onInput={ terminalInput => {
          terminal.indexOf(terminalInput) > -1 ? terminal.push( {type: LineType.Output, value: terminalInput}  ) : terminal.push( {type: LineType.Output, value: `-bash:  ${terminalInput}: command not found`} )
          setModal(terminalInput)
        }
        }
      />
    </div>
  )

}

export default App
