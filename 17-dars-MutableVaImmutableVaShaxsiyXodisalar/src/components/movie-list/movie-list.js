import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ({data, onDelete})=>{
    return <ul className="movie-list">
        {data.map(item=>(
        <MovieListItem key ={item.id} filmName={item.filmName} viewers={item.viewers} favourite={item.favourite} onDelete={()=>onDelete(item.id)}></MovieListItem>

        // <MovieListItem key={item.id} { ...item}/>
        ))}
        

    </ul>

}

export default MovieList