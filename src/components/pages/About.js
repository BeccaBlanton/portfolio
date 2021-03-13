import React from "react";
import profileimg from "../../profileimg.jpg"
function About() {
  return (
    <main>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>About Me:</h1>
                    <img src={profileimg}alt="Becca Blanton" className="mr-md-3 img-fluid img-thumbnail float-md-left"></img>
                    <p>
                    I am a web developer based out of Rocklin, CA. I am a creative at heart and live for creating new things that spark joy and help others. I graduated from California State University, Sacramento with a Bachelor’s in Psychology in 2011 and have worked for the past 9 years with children with autism in Applied Behavioral Analysis Therapy. 
                    <br></br>
                    <br></br>
                    As a mother of 2 young children and my years working with children on the spectrum I have gained the skills to remain patient and work with a wide range of clientele. I believe in bringing fun and joy out of each situation while simultaneously staying organized and detailed.
                    <br></br>
                    <br></br>
                    I am proficient in JavaScript, HTML5, CSS, and MySQL. In addition I have experience working with the following tools and libraries: jQuery, Bootstrap, Git, Visual Studio, and GSAP.
                    </p>
                </div>
            </div>
        </div>
    </main>
  );
}

export default About;