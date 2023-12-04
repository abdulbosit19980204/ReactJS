// Class components

import {useState} from "react";
import  "./deletable.css"

// class User extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       counter: 0,
//       age:''
//     }
//      }
  
//   incClickHandler = ()=>{
//     // this.setState({counter: this.state.counter+1})
//     this.setState(prevState=>({counter: prevState.counter+1}))
//   }
//   deccClickHandler = ()=>{
//     // this.setState({counter: this.state.counter-1})
//     this.setState(prevState=>({counter: prevState.counter-1}))
//   }
//   resetClickHandler = ()=>{
//     this.setState({
//       counter: 0
//     })
//     this.setState(prevState=>({counter: 0}))
// }

// changeHandler = (e) =>{
//   this.setState({counter: parseInt(e.target.value)})
// }

//   render(){
//     console.log(this.props);
//     const {age, counter} = this.state
//    return(
//     <div className="deletable">
//       <h1>Limit: <span>{counter}</span></h1>
//       <button onClick={this.incClickHandler} className="btn btn-outline-success mt-3 pt-1 pb-1 ps-3 pe-3
// pt-1 pb-1 ps-3 pe-3"><span className="fw-bold fs-1">+</span></button>
//       <button onClick={this.deccClickHandler} className="btn btn-outline-success mx-2 mt-3 pt-1 pb-1 ps-3 pe-3"><span className="fw-bold fs-1">-</span></button>
//       <button onClick={this.resetClickHandler} className="btn btn-outline-success mx-2 mt-3 pt-1 pb-1 ps-3 pe-3 "><span className="fw-bold fs-1">0</span></button>
//       <form className="form-control mt-3">
//         <span>
//     Nechta kino kordiz: {age}
//         </span>
//         <input type="text" className="form-control" onChange={this.changeHandler}/>
//       </form>
//     </div>
//    )
//   }  
// }

const User = ()=>{
//   const [state, setState]=useState({
//     counter:0,
//     age: 21,
//     isLogin: false
//   })
// console.log(state);
//   const incClickHandler = ()=> {setState(prevState=>({...prevState, counter:prevState.counter+1 }))}
//   const deccClickHandler = ()=> {setState(prevState=>({...prevState, counter:prevState.counter-1 }))}
//   const resetClickHandler = () => {setState(prevState=>({...prevState, counter:0 }))}
//   const changeHandler = (e)=> {setState(prevState=>({...prevState, age:parseInt(e.target.value)}))}
//   const onToggleLogin = () => {setState(prevState=>({...prevState, isLogin:!prevState.isLogin}))}
  const [counter, setCount]  = useState(0)
  const [isLogin, setIsLogin] =useState(false)
  const [age, setAge] = useState(21)

  const incClickHandler = ()=>{
   setCount(prevState=>prevState+1)
  //  setCount(counter+1)
  }
  const deccClickHandler = ()=>{
    setCount(counter-1)
  }
  const resetClickHandler = ()=>{
    setCount(0)
  }
  const changeHandler = (e)=>{
    setAge(parseInt(e.target.value))
  }

  const onToggleLogin = ()=>{
    setIsLogin(prevState=>!prevState)
  }

  return(
    <div className="deletable">
    <h1>Limit: <span>{counter}</span></h1>
    {/* <h1>Limit: <span>{state.counter}</span></h1> */}
    <button onClick={incClickHandler} className="btn btn-outline-success mt-3 pt-1 pb-1 ps-3 pe-3 pt-1 pb-1 ps-3 pe-3"><span className="fw-bold fs-1">+</span></button>
    <button onClick={deccClickHandler} className="btn btn-outline-success mx-2 mt-3 pt-1 pb-1 ps-3 pe-3"><span className="fw-bold fs-1">-</span></button>
    <button onClick={resetClickHandler} className="btn btn-outline-success mx-2 mt-3 pt-1 pb-1 ps-3 pe-3 "><span className="fw-bold fs-1">0</span></button>
    
    <form className="form-control mt-3">
      <span>
  Nechta kino kordiz: {age}
  {/* Nechta kino kordiz: {state.age} */}
      </span>
      <input type="text" className="form-control" onChange={changeHandler}/>
    </form>
    {isLogin ? <p className="text-center mt-3">Login</p> : null}
    {/* {state.isLogin ? <p className="text-center mt-3">Login</p> : null} */}
      
    <div className="deletable d-flex justify-content-center">
      <button className="btn btn-outline-primary" onClick={onToggleLogin}>Sign in</button>
    </div>
  </div>
  )
}

export default User