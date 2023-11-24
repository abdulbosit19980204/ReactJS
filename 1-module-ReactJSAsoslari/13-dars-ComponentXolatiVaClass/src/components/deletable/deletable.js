// Class components

import {Component} from "react";
import  "./deletable.css"

class User extends Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0
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
    // this.setState({
    //   counter: 0
    // })
    this.setState(prevState=>({counter: 0}))
}
  render(){
    console.log(this.props);
   return(
    <div className="deletable">
      <h1>Limit: <span>{this.state.counter}</span></h1>
      <button onClick={this.incClickHandler} className="btn btn-outline-success mt-3 pt-1 pb-1 ps-3 pe-3
pt-1 pb-1 ps-3 pe-3"><span className="fw-bold fs-1">+</span></button>
      <button onClick={this.deccClickHandler} className="btn btn-outline-success mx-2 mt-3 pt-1 pb-1 ps-3 pe-3"><span className="fw-bold fs-1">-</span></button>
      <button onClick={this.resetClickHandler} className="btn btn-outline-success mx-2 mt-3 pt-1 pb-1 ps-3 pe-3 "><span className="fw-bold fs-1">0</span></button>
    </div>
  
   )
  }  
}

export default User