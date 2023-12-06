import Deletable from "../deletable/deletable"
import './app.css'
import { useState } from "react"


const App = ()=>{
const [isDisplay, setIsDisplay]=useState(false)
const deleteDisplayHandler = ()=>{
    setIsDisplay(!isDisplay)
}
  
    return (
        <div className="app font-monospace">
            <div className="content">
                
                <button className="btn btn-outline-dark " onClick={deleteDisplayHandler}>Show</button>
                {isDisplay && (
                    <Deletable />
                )}
                
            </div>
        </div>
    )
    }
export default App