import './movie-list-item.css'


const MovieListItem  = (props)=>{
    const  {filmName,viewers, onDelete, onToggleProp, favourite, like} = props
    return(
        <li className={`list-group-item d-flex justify-content-between ${favourite && "favourite"} ${like && "like"}`}>
        {/* // <li className={classNames}> */}
            <span onClick={onToggleProp} className="list-group-item-lable" data-toggle='like'>{filmName}</span>
            <input type="number" className="list-group-item-input" defaultValue={viewers}/>
            <div className="d-flex justify-content-center align-items-center"> 
                <button type="button" className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle="favourite">
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



export default MovieListItem