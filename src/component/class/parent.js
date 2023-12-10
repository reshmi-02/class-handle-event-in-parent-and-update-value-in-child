import React,{Component} from 'react'
import Child from './child.js'
class Parent extends Component{
constructor(){
    super()
    this.state={
        name:"reshmi"
    }
}
render(){

    const change=()=>{
        this.setState({name:"preetha"})
    }
    return(
        <div>
            <h3>parent component</h3>
            <Child name={this.state.name} fun={change}/>
        </div>
    )
}
}

export default Parent