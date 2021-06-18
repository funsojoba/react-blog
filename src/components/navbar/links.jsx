const Links = (props)=>{
    return (
        props.links.map((link, index)=>{
            return(
        <div key={index} className="single-link">
                <a href={link.url}>{link.name}</a>
            </div>
            )
        })
    )
}

export default Links