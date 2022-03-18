import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import App from '../App.js'

import Maggie from './Maggie.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [input, setInput] = useState("")

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  },[])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleChange(e) {
    setInput(e.target.value)
    e.preventDefault()
  }
  console.log('input')
  if (input.toLowerCase() === "back") {
    return (
      <App />
    )
  }
  return (
    <div className="resume">
      <p id="title">MAGGIE'S RESUME</p>
      <p><span id="moneysign">$</span> Below you can find my resume. You can also download the PDF version <a href={Maggie} download>here</a>.</p>
      <p><span id="moneysign">$</span> Typing in "back" will automatically take you to the main page <input type="text" onChange={e => setInput(e.target.value)} ref={inputRef}  value={input} /></p>
      <div id="pdf">
        <Document file={Maggie} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;