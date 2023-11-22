import './movie-list-item.css'
const MovieListItem = ({key,filmName,viewers,favourite})=>{
    // let classNames = 'list-group-item d-flex justify-content-between'
    // if(favourite){
    //     classNames += ' favourite'
    // }
    return (
        <li className={`list-group-item d-flex justify-content-between ${favourite && "favourite"}`}>
        {/* // <li className={classNames}> */}
            <span className="list-group-item-lable">{filmName}</span>
            <input type="number" className="list-group-item-input" defaultValue={viewers}/>
            <div className="d-flex justify-content-center align-items-center"> 
                <button type="button" className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
                
            </div>

        </li>
    )
}

export default MovieListItem