import { Component } from 'react'
import './movies-add-form.css'


class MoviesAddForm extends Component {
    constructor(props){
        super(props)
       this.state= {
        filmName:'',
        viewers:''
        }
    }


changeInputHandler = (e)=>{
this.setState({
    [e.target.name]:e.target.value,
})
}


    render(){
        return(
            <div className='movies-add-form'>
                <h3>Yangi kino qoshish</h3>
                <form className='add-form d-flex'>
                <input onChange={this.changeInputHandler} name='filmName' type="text" className="form-control new-post-lable" placeholder="Qanday kino?"/>
                <input onChange={this.changeInputHandler} name='viewers' type="number" className="form-control new-post-lable" placeholder="Nechi marotaba korilgan?"/>
                <button type='submit' className='btn btn-outline-dark'>
                    Qo'shish
                </button>
                </form>
            </div>
        )
    }
}

export default MoviesAddForm