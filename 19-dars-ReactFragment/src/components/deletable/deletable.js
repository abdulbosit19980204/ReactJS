// Class components

import {Component, Fragment} from "react";
import  "./deletable.css"

class User extends Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      age:''
    }
  }
  
  incClickHandler = ()=>{
    // this.setState({counter: this.state.counter+1})
    this.setState(prevState=>({counter: prevState.counter+1}))
  }
  deccClickHandler = ()=>{
    // this.setState({counter: this.state.counter-1})
    this.setState(prevState=>({counter: prevState.counter-1}))
  }
  resetClickHandler = ()=>{
    this.setState({
      counter: 0
    })
    this.setState(prevState=>({counter: 0}))
}

changeHandler = (e) =>{
  this.setState({counter: parseInt(e.target.value)})
}

  render(){
    console.log(this.props);
    const {age, counter} = this.state
   return(
    <Fragment >
      <h1>Limit: <span>{counter}</span></h1>
      <button onClick={this.incClickHandler} className="btn btn-outline-success mt-3 pt-1 pb-1 ps-3 pe-3
pt-1 pb-1 ps-3 pe-3"><span className="fw-bold fs-1">+</span></button>
      <button onClick={this.deccClickHandler} className="btn btn-outline-success mx-2 mt-3 pt-1 pb-1 ps-3 pe-3"><span className="fw-bold fs-1">-</span></button>
      <button onClick={this.resetClickHandler} className="btn btn-outline-success mx-2 mt-3 pt-1 pb-1 ps-3 pe-3 "><span className="fw-bold fs-1">0</span></button>
      <form className="form-control mt-3">
        <span>
    Nechta kino kordiz: {age}
        </span>
        <input type="text" className="form-control" onChange={this.changeHandler}/>
      </form>
    </Fragment>
   )
  }  
}

export default User