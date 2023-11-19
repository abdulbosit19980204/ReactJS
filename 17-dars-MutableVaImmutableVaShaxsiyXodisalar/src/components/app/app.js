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
        },
        {
            id:1,
            filmName:"Osiyo ustida boʻron1",
            viewers:"8000",
            favourite:true
        },
        {
            id:2,
            filmName:"A-Haunting We Will Go2",
            viewers:"2225",
            favourite:false
        },
        {
            id:3,
            filmName:"A-Haunting We Will Go3",
            viewers:"2225",
            favourite:true
        },
        {
            id:4,
            filmName:"A-Haunting We Will Go4",
            viewers:"2225",
            favourite:false
        },
        {
            id:5,
            filmName:"A-Haunting We Will Go5",
            viewers:"2225",
            favourite:true
        }] , 
    }

}
onDelete = (id)=>{
    this.setState(({data}) => {
        // const index = data.findIndex(c=>c.id===id)
        // data.splice(index, 1)
        const newArr = data.filter(c=>c.id!==id)
        console.log(newArr);
        return{
            data:newArr,
        }
    })

}

addForm = (item)=>{
    this.setState(({data})=>({
    data: [...data,{...item, id: uuidv4()}]
}))
}
render(){
    const {data}=this.state
    return ( 
        <div className="app font-monospace">
            <div className="content">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <MovieList data={data} onDelete={this.onDelete}></MovieList>
                <MoviesAddForm addForm={this.addForm}></MoviesAddForm>
            </div>
        </div>
    )
}

   
    }
export default App