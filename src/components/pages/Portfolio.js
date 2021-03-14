import React from "react";
import Project from "../Project"
import projects from "../../projects.json"

function Portfolio() {
  

  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <div className="row">
          <div className="col portfolio">
            <h1>Portfolio:</h1>
              <div className="row">
                {projects.map(project => (
                <Project 
                key= {project.id}
                image= {project.image}
                title= {project.title}
                text= {project.text}
                link= {project.link}
                github= {project.github}
                />
                ))}
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;