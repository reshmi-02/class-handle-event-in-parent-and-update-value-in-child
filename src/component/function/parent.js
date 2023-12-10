import React,{useState} from 'react'
import Child from './child.js'
const Parent =()=>{
    const [name,setname]=useState("Reshmi")
    const handlechange=()=>{
        setname("preetha")
    }
    return(
        <div>
            <h4>parent component</h4>
            <p>handle event in parent component</p>
            <Child name={name} fun={handlechange}/>
        </div>
    )
}

export default Parent