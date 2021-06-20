import { useState } from "react"
import Blogs from './Blogs'


const Home = ()=>{
    const [blogs, setBlogs] = useState([
        { id:1, 
            imgUrl:'https://image.freepik.com/free-vector/landscape-wallpaper-flat-design_74890-34.jpg',
            title:'something 1', 
            body:'Morbi gravida rutrum laoreet. Maecenas eu malesuada libero, vel rhoncus magna. Mauris semper accumsan ipsum eget.',
            author:'James Athur'},
        { id:2, 
            imgUrl:'https://cdn.hovia.com/app/uploads/Green-Tropical-Plant-Wallpaper-Mural-Plain.jpg',
            title:'Lorem 2', 
            body:'Proin at eros ex. Etiam finibus lacus eget tellus dapibus, nec bibendum sapien elementum. Nulla finibus urna vel consequat elementum.',
            author:'James Athur'},
        { id:3, 
            imgUrl:'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg',
            title:'ipsum 3',
            body:'turpis magna tempus eros, id venenatis lectus felis at augue. Nunc et ante sit amet ligula eleifend dapibus',
            author:'James Athur'},
        { id:4, 
            imgUrl:'https://wallpapercave.com/wp/wp2646303.jpg',
            title:'dolor', 
            body:'rhoncus. Suspendisse lacinia quis tortor et varius. Integer hendrerit, sem in ultrices tincidunt.',
            author:'James Athur'},
    ])

    const handleDelete = (id)=>{
        const newBlog = blogs.filter(blog => blog.id !== id)

        setBlogs(newBlog)
        console.log(id)
    }

    return (
            <div >
                <Blogs blogs={blogs} 
                handleDelete={handleDelete}/>
                
            </div>
        )
}

export default Home
