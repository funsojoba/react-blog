import { Link } from "react-router-dom"

const Links = ()=>{
    return (
        <div className="links">
            <Link to ="/" className="single-link">Home</Link>
            <Link to="/create" className="single-link">Create</Link>
        </div>
        )
}

export default Links