import React from 'react'
import coverImage from "../../assets/cover/pic.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "15%", height: "15%"}} class="img-fluid" alt="cover" />
      <div className="my-2">
        <p>
        I was born and raised in Southern California. I attended Florida State Univeristy and I currently work as a Dental Assistant.
                I've always had a fascination with coding and web development but never immersed myself in the subject, my cousin gave me the idea after he began his coding journey.
                I'm currently in a coding bootcamp and at the moment expanding my coding knowledge every day. This bootcamp will teach me about HTML, CSS, JavaScript, MERN, Bootstrap, and React. 

      </p>
      </div>
    </section>
  )
}

export default About