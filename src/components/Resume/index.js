import React from 'react';
import pdf from "../../assets/documents/markdale_2021.pdf";

function Resume() {
  return (
    <section>
      <a href={pdf} target="_blank" rel="noreferrer" alt="Resume">Resume</a>
    </section>
  )
}

export default Resume;