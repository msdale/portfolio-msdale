import React from 'react';
import pdf from "../../assets/documents/markdale_2021.pdf";

function About(props) {
  
  return (
    <>
    <section className="my-5">
      <p id="text-thought-about">Let us run with endurance the race set before us...</p>
      <h1 className="mx-2" id="about">About me</h1>
      <div className="my-2 mx-2">
        <p>
          I'm an experienced software engineer who has been in the field for 38 years.  I've focused most of my career
          on backend development; managing, handling, and transforming data.  The past 22 years at Walt Disney World Parks
          and Resorts IT, I designed, implemented, and supported database applications focused on managing guest
          reservations and other linked guest data. The number of guests supported in the system grew from ~80 million
          to over 200 million guests during my tenure. A concise breakdown of that experience is provided in my resume
          (<a style={{ color: "#fce138" }} href={pdf} target="_blank" rel="noreferrer" alt="Resume">View Resume</a>). 
          My latest technical pursuit has been acquiring a Full-Stack skill set so I can be more engaged in development
          effecting both sides of the browser. The "Projects" button above reflects the training I completed while attending
          the UCF (University of Central Floriday) Full-Stack coding boodcamp.</p>
        <p> I'm hard-working, focused, and work well alone, yet I enjoy being part of,
          and contributing to a well functioning team (who doesn't?). Perhaps I can be a part of yours. Thanks for visiting
          my site, and I hope to hear from you.
        </p>
      </div>
    </section>
    </>
  )
}

export default About;