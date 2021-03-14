import React from "react";

function Contact() {
  return (
   <main>
     <div className="container">
       <div className="row">
         <div className="col">
           <form action="https://formspree.io/f/xaylqavq" method="POST">
             <div className="card">
               <div className="card-body">
                 <div className="form-header">
                   <h1 className="mt-2"><i className="fas fa-envelope-open-text"></i>Contact Me:</h1>
                 </div>
                 <div className="md-form mb-0">
                   <input type="text" id="email" name="_replyto" className="form-control" requied={true}></input>
                   <label htmlFor="email">Your Email   </label><i className="fas fa-envelope-open-text"></i>
                 </div>
                 <div className="md-form md-0">
                  <input type="text" id="subject" name="subject" className="form-control" required={true}></input>
                  <label htmlFor="subject">Subject   </label><i className="fas fa-tag"></i>
                 </div>
                 <div className="md-form">
                  <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" required={true}></textarea>
                  <label htmlFor="message">Your message  </label><i className="fas fa-pencil-alt prefix grey-text"></i>
                 </div>
                 <div className="text-center">
                  <button className="btn btn-primary"><input type="submit" value="Send"></input>
                  </button>
                  <p>(916)412-9193 BeccaABlanton@gmail.com</p>
                 </div>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
   </main>
  );
}

export default Contact;
