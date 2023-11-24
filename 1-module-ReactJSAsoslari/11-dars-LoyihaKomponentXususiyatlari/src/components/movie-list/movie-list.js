import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ({data})=>{
    return <ul className="movie-list">
        {data.map(item=>(
        // <MovieListItem filmName={item.name} viewers={item.viewers} favourite={item.favourite}></MovieListItem>

        <MovieListItem {...item}/>
        ))}
        

    </ul>

}

export default MovieList