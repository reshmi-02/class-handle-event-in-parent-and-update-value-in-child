import React from 'react'

const Child=(prop)=>{
    
    return(
        <div>
            <h4>Child component</h4>
            <p>name:{prop.name}</p>
            <button onClick={prop.fun}>click</button>
        </div>
    )
}

export default Child