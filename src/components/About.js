import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {/* ✅ Only show the paragraph if bio exists and is not empty */}
      {bio && bio.trim() !== "" ? <p>{bio}</p> : null}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* ✅ Render Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
