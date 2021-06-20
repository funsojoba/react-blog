import { Link } from "react-router-dom"

const Links = ({links})=>{
    return (
        links.map((link, index)=>{
            return(
        <div key={index} className="single-link">
                <Link to={link.url}>{link.name}</Link>
            </div>
            )
        })
    )
}

export default Links