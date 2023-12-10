import React,{Component} from 'react'

class Child extends Component{
render(){
    const prop=this.props
    return(
        <div>
            <h3>child component</h3>
            <p>Update name in child component and handle event in parent component</p>
            <p>{prop.name}</p>
            <button onClick={prop.fun}>Click</button>
        </div>
    )
}
}

export default Child