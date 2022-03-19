import React, {useState, useEffect, useRef} from 'react';




const Intro = ({inputCb, title, inputLine}) => {

  const [input, setInput] = useState("")
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  },[])

  useEffect(() => {
    inputCb(input)
  },[input])

  return (
    <div className="padding">
      <p id="title">{title}</p>
      <p><span id="moneysign">$ </span><span dangerouslySetInnerHTML={{ __html: inputLine }}></span></p>
      <p id="italic"><span id="moneysign">$ </span>Typing in back will automatically take you to the main page <input type="text" onChange={e => setInput(e.target.value)} ref={inputRef}  value={input} /></p>
    </div>
  )
}

export default Intro;