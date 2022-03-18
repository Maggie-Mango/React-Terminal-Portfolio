import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import Intro from './Intro.js';
import App from '../App.js';

import Maggie from './Maggie.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [input, setInput] = useState("")

  function updateInput(input) {
    setInput(input)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  if (input.toLowerCase() === "back") {
    return (
      <App />
    )
  }

  console.log(input)
  return (
    <div className="resume">
      <Intro
        inputCb={updateInput}
        title="MAGGIE'S RESUME"
        inputLine="Below you can find my resume. You can also download the PDF version <a href={Maggie} download>here</a>." />
      <div id="pdf">
        <Document file={Maggie} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;