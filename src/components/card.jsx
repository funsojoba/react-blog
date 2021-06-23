const Card = (props)=>{
    return (
        <div >
            <img src={props.card.imgUrl} loading="lazy" alt={props.card.title}  className="image"/>
            <small>{props.card.author}</small>
            <h2>{props.card.title}</h2>
            <p>{props.card.body}</p>
            <button onClick={props.handleDelete}>Delete</button>
        </div>
    ) 
}

export default Card