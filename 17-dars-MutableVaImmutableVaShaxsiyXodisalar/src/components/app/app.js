import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import MovieList from "../movie-list/movie-list"
import MoviesAddForm from "../movies-add-form/movies-add-form"
import './app.css'


const App = ()=>{

    const data= [{
        id:0,
        filmName:"A-Haunting We Will Go",
        viewers:"2225",
        favourite:true,
    },
    {
        id:1,
        filmName:"Osiyo ustida boʻron",
        viewers:"8000",
        favourite:true
    },
    {
        id:2,
        filmName:"A-Haunting We Will Go",
        viewers:"2225",
        favourite:false
    },
    {
        id:3,
        filmName:"A-Haunting We Will Go",
        viewers:"2225",
        favourite:true
    },
    {
        id:4,
        filmName:"A-Haunting We Will Go",
        viewers:"2225",
        favourite:false
    },
    {
        id:5,
        filmName:"A-Haunting We Will Go",
        viewers:"2225",
        favourite:true
    }]

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <MovieList data={data}></MovieList>
                <MoviesAddForm></MoviesAddForm>
            </div>
        </div>
    )
    }
export default App