import { useEffect, useState } from "react"
import "./counter-item.css"
const CounterItem=({counterGenerate})=>{
    const [item, setItem]=useState([])
    useEffect(()=>{
        const newItem = counterGenerate()
        setItem(newItem)
    },[counterGenerate])
    return(
        <div> 
            <br/>
           <ul>
            {item.map(item =><li>{item}</li>)}
           </ul>
        </div>
    )
}

export default CounterItem