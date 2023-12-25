// Class components

import {useState} from "react";
import  "./deletable.css"
import CounterItem from "../counter-item/counter-item";

const User = ()=>{
const [counter, setCount]  = useState(0)
const [active, setActive] = useState(false)

const incClickHandler = ()=>{
   setCount(prevState=>prevState+1)
  }
const onToggle = ()=>{
    setActive(prevState=>!prevState)
  }
const counterGenerate=()=>{
return new Array(counter).fill("").map((_,idx)=>`Counter number: ${idx}`)
}
console.log(counterGenerate());
 const colors = {
  fontWeight:"bold",
  color: active ? "red":"gray"
 }
 
  return(
    <div className="deletable">
      <div className="deletable d-flex justify-content-center">
    <h1 className="mt-2 mx-5" style={colors}>Limit: <span>{counter}</span></h1>
    <button onClick={incClickHandler} className="btn btn-outline-success mt-2 pt-1 pb-1  pt-1 pb-1"><span className="fw-bold fs-1">+</span></button>
    <input className="ms-5 form-check-input fs-1" type="checkbox" name="" id="" onChange={onToggle} />    
  </div>
      <CounterItem counterGenerate={counterGenerate}/>
    </div>
  )
}

export default User