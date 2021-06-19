const SearchBox =({placeholder, handleChange})=>{
    return (
        <div className="search-box">
            <input 
                type="search"
                placeholder={placeholder}
                onChange={handleChange}/>
        </div>
    )
}


export default SearchBox