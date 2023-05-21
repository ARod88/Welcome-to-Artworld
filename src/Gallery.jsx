function Gallery(props) {
    return (
        <div>
            {props.data.title ? <h1>{props.data.title}</h1> : "No Title!"}
            <h3>{props.data.medium}</h3>
            <h3>{props.data.objectEndDate}</h3>
            { props.data.primaryImage ? <img className="primary-image" src={props.data.primaryImage} alt={props.data.title} /> : "No Image!"}
        </div>
    )
}

export default Gallery