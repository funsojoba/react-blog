const Textarea = ({handleChange, placeholder })=>{
    return(
        <textarea 
            onChange={handleChange} 
            placeholder={placeholder}></textarea>
    )
}

export default Textarea