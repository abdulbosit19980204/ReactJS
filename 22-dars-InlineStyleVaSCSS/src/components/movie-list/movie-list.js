import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ({data, onDelete, onToggleProp})=>{
    return <ul className="movie-list">
        {data.map(item=>(
        <MovieListItem 
            key ={item.id} 
            filmName={item.filmName} 
            viewers={item.viewers} 
            favourite={item.favourite} 
            like={item.like} 
            onDelete={()=>onDelete(item.id)}
            onToggleProp={(e)=>onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}

            >
        </MovieListItem>

        // <MovieListItem key={item.id} { ...item}/>
        ))}
        

    </ul>

}

export default MovieList