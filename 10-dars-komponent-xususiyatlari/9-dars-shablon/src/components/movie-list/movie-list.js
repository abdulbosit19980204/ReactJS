import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ()=>{
    return <div className="movie-list">
        <MovieListItem filmName="Omar"></MovieListItem>
        <MovieListItem filmName="Usmon"></MovieListItem>
        <MovieListItem filmName="JamesBond"></MovieListItem>

    </div>

}

export default MovieList