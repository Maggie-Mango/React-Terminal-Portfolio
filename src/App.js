import React, { useState } from 'react';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';
import Typewriter from 'typewriter-effect';

const Openingmessage =
<>
  <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hi! 👋 My name is Maggie, a full-stack engineer based in New York City 🗽 Feel free to reach out to me at 💌maggiesaldivia@gmail.com for opporitunities')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .start();
  }}
  />
  <br />
</>

const instructions =
<>
  Type the following to see more:
  <br />
    Resume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Soundtok&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Atelier&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    API:Q&A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <br />
  <br />
</>



const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    {type: LineType.Output, value: Openingmessage},
    {type: LineType.Output, value: instructions},
    {type: LineType.Input, value: 'Created with React App 💖 Best viewed on Web' },
  ]);
  // Terminal has 100% width by default so it should usually be wrapped in a container div



  return (
    <div className="container">

      <Terminal
        name='MAGGIE SALDIVIA PORTFOLIO'
        colorMode={ ColorMode.Light }
        lineData={ terminalLineData }
        onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`) }
      />

    </div>
  )
}

export default TerminalController
