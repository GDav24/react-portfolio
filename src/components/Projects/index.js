import React, { useState } from "react";
import {Container, Row, Col} from "react-bootstrap";


function Projects({ name }) {
  const [smShowDescription, toggleSmShowDescription] = useState(false)

  const [apps] = useState([
    {
      name: <>Loan Me a Home</>,
      Github: "https://github.com/gdav24/loanMeAHome.git",
      appUrl: "https://loanmeahome.herokuapp.com/",
      index: 1,
    },
    {
      name: <>goRecette</>,
      Github: "https://github.com/gdav24/gorecette.git",
      appUrl:"https://gdav24.github.io/gorecette/",
      index: 2,
    },
    {
      name: <>Work Day Scheduler</>,
      Github: "https://github.com/gdav24/workday-scheduler.git",
      appUrl:"https://gdav24.github.io/workday-scheduler/",
      index: 3,
    },
    {
      name: <>Note Taker</>,
      Github: "https://github.com/gdav24/note-taker.git",
      appUrl: "https://note-taker-57.herokuapp.com/",
      index: 4,
    },
    {
      name: <>Coding-Quiz</>,
      Github: "https://github.com/GDav24/CodingQuiz",
      appUrl: "https://gdav24.github.io/CodingQuiz/",
      index: 5,
    },
    {
      name: <>Password Generator</>,
      Github: "https://github.com/GDav24/challenge-3-js",
      appUrl: "https://gdav24.github.io/challenge-3/",
      index: 5,
    },
  ]);

  return (
    <section>
      <ul>
        {apps.map((app, index) => (
          <li>
            <div>
       
            </div>
          </li>
        ))}
      </ul>
    </section>

  );
}

export default Projects;
