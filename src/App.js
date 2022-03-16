import React, { useState } from 'react';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';
import Typewriter from 'typewriter-effect';

const Openingmessage =
<>
  <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hi! 👋 My name is Maggie, a full-stack engineer based in NYC 🗽')
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
  Type the following commands to see more:
  <br />
    Resume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Soundtok&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Atelier&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    API:Q&A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <br />
  <br />
</>

const terminal = [
  {type: LineType.Output, value: Openingmessage},
  {type: LineType.Output, value: instructions},
  {type: LineType.Input, value: 'Get in touch 💌maggiesaldivia@gmail.com' }
]

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState(terminal);
  const [openLink, setOpenLink] = useState(null)
  // Terminal has 100% width by default so it should usually be wrapped in a container div


  console.log(openLink)
  return (
    <div className="container">
      <Terminal
        name='MAGGIE SALDIVIA PORTFOLIO'
        colorMode={ ColorMode.Light }
        lineData={ terminalLineData }
        onInput={ terminalInput => { terminal.indexOf(terminalInput) > -1 ? terminal.push( {type: LineType.Output, value: terminalInput}  ) : terminal.push( {type: LineType.Output, value: `-bash:  ${terminalInput}: command not found`} )}
        }
      />
    </div>
  )
}

export default TerminalController
