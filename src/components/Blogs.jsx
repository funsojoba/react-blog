const Blogs = (props)=>{
    const blogs = props.blogs
    return (
        <div className="home">{
            blogs.map((blog) =>(
                    <div key={blog.id} className="blog">
                        <img src={blog.imgUrl}  className="image"/>
                        <small>{blog.author}</small>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <button onClick={()=>props.handleDelete(blog.id)}>Delete</button>
                    </div>
                ))
                }
        </div>
    )
}

export default Blogs