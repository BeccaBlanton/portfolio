import React from "react";
import resume from '../../RebeccaBlantonResume.png'
function Resume() {
  return (
       <main>
        <div className="container">
            <div className="row">
                <div className="col">
                  <a href='https://docs.google.com/document/d/e/2PACX-1vR2OP9YHaCT8ct64Lundv7076lKWFfS_2K5hyEyMEoRt8YYsyTAD4QquD633ixxafh7S4B7bIHZ67tx/pub'>
                    <img src={resume} className="card-img-top" alt="resume"></img>
                  </a>
                  
                </div>
            </div>
        </div>
      </main>
  );
}

export default Resume;