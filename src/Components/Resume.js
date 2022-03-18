import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

import Maggie from './Maggie.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div class="resume">
      <p id="title">MAGGIE'S RESUME</p>
      <p><span id="moneysign">$</span> Type back to head back to the main page </p>
      <p>Below you'll find my resume. You can also download the PDF version <a href={Maggie} download>here</a>.</p>
      <div id="pdf">
        <Document file={Maggie} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;