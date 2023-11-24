
import './movies-add-form.css'

const MoviesAddForm = ()=>{
    return(
        <div className='movies-add-form'>
            <h3>Yangi kino qoshish</h3>
            <form className='add-form d-flex'>
            <input type="text" className="form-control new-post-lable" placeholder="Qanday kino?"/>
            <input type="number" className="form-control new-post-lable" placeholder="Nechi marotaba korilgan?"/>
            <button type='submit' className='btn btn-outline-dark'>
                Qo'shish
            </button>
            </form>
        </div>
    )
}

export default MoviesAddForm