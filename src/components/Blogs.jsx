import Card from './card'

const Blogs = (props)=>{
    return (
        <div className="home">{
            props.blogs.map((blog) =>(
                    <div key={blog.id} className="blog">
                        <Card 
                            card={blog}
                            handleDelete={(e)=>props.handleDelete(blog.id)}/>
                    </div>
                ))
                }
        </div>
    )
}

export default Blogs