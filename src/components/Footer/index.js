import "./style.css";

function Footer(){
    return(
    <footer className="fixed-bottom footer mt-auto py-3">
        <div className="container">
            <span>
                <a href="https://github.com/BeccaBlanton" className="fa fa-github"> </a>

                <a href="https://www.linkedin.com/in/rebecca-blanton-416028ab/" className="fa fa-linkedin"> </a>

                <a href="mailto:beccaablanton@gmail.com" className="fa fa-envelope"> </a>
            </span>
        </div>
  </footer>
    )
}

export default Footer;