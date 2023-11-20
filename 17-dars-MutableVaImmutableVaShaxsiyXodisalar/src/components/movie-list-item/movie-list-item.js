import './movie-list-item.css'
import {Component} from 'react'

class MovieListItem extends Component{
    constructor(props){
        super(props)
        this.state = {favourite: false, like:false}
    }
onFavourite=()=>{
this.setState(({favourite}) => ({
    favourite: !favourite 
}))
}
onLike=()=>{
    this.setState(({like})=>({
        like:!like
    }))
}

    render(){
      const  {filmName,viewers, onDelete} = this.props
      const {favourite,like} = this.state
      return (
        <li className={`list-group-item d-flex justify-content-between ${favourite && "favourite"} ${like && "like"}`}>
        {/* // <li className={classNames}> */}
            <span onClick={this.onLike} className="list-group-item-lable">{filmName}</span>
            <input type="number" className="list-group-item-input" defaultValue={viewers}/>
            <div className="d-flex justify-content-center align-items-center"> 
                <button type="button" className="btn-cookie btn-sm" onClick={this.onFavourite}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button" className="btn-trash btn-sm" >
                    <i className="fas fa-trash" onClick={onDelete}></i>
                </button>
                <i className="fas fa-star"></i>
                
            </div>

        </li>
    )
    }

}



export default MovieListItem