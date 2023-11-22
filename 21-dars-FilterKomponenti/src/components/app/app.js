import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import MovieList from "../movie-list/movie-list"
import MoviesAddForm from "../movies-add-form/movies-add-form"
import './app.css'
import { Component } from "react"
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
constructor(props){
    super(props)
    this.state = {
        data: [{
            id:0,
            filmName:"A-Haunting We Will Go0",
            viewers:"2225",
            favourite:true,
            like: false,
        },
        {
            id:1,
            filmName:"Osiyo ustida boʻron1",
            viewers:"8000",
            favourite:true,
            like: true,
        },
        {
            id:2,
            filmName:"A-Haunting We Will Go2",
            viewers:"2225",
            favourite:false,
            like: false,
        },
        {
            id:3,
            filmName:"A-Haunting We Will Go3",
            viewers:"2225",
            favourite:true,
            like: false,
        },
        {
            id:4,
            filmName:"A-Haunting We Will Go4",
            viewers:"2225",
            favourite:false,
            like: false,
        },
        {
            id:5,
            filmName:"A-Haunting We Will Go5",
            viewers:"2225",
            favourite:true,
            like: false,
        }] , 
        term:'',
        filter:'popular',
    }

}


onDelete = (id)=>{
    this.setState(({data}) => {
        // const index = data.findIndex(c=>c.id===id)
        // data.splice(index, 1)
        const newArr = data.filter(c=>c.id!==id)
        // console.log(newArr);
        return{
            data:newArr,
        }
    })

}

addForm = (item)=>{
    const newItem = {filmName: item.filmName, viewers: item.viewers, id: uuidv4(), favourite: false, like: false, }
    this.setState(({data})=>({
    data: [...data,newItem]
}))
}

onToggleProp = (id, prop)=>{
    console.log(prop);
this.setState(({data})=>({
    data:  data.map(item=> {
        if (item.id === id) {
            return{...item, [prop]: !item[prop]}
        }
        return item

    })
}))
}

searchHandler = (arr, term)=>{
    if(term===0){
        return arr
    }
    return arr.filter(item=>item.filmName.toLowerCase().indexOf(term) > -1)
}

filterHandler = (arr, filter)=>{
    switch (filter) {
        case "popular":
            return arr.filter(c => c.like)
        case "mostViewers":
            return arr.filter(c => c.viewers>7000)
        default:
            return arr
            
    }
}
updateTermHandler = (term)=>{this.setState({term})}

render(){
    const {data, term, filter}=this.state
    const allMoviesCount = data.length
    const favouriteMovieCount = data.filter(c=>c.favourite).length 
    const visibleData =this.filterHandler(this.searchHandler(data, term), filter) 
    return ( 
        <div className="app font-monospace">
            <div className="content">
                <AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount = {favouriteMovieCount}/>
                <div className="search-panel">
                    <SearchPanel updateTermHandler={this.updateTermHandler}/>
                    <AppFilter/>
                </div>
                <MovieList  onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete}></MovieList>
                <MoviesAddForm addForm={this.addForm}></MoviesAddForm>
            </div>
        </div>
    )
}

   
    }
export default App