
function Project (props){
    return (
    <section className="card mx-auto">
      <br></br>
        <img src={props.image} className="card-img-top" alt={props.title}></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href = {props.link} className="btn btn-primary">Go Now!</a>
                <a href = {props.github} className="btn btn-primary">Git Hub</a>
            </div>
    </section>
    )
}
export default Project