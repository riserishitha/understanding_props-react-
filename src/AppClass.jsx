import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
constructor(props){
  super(props)
}
  render(){
    const {name} = this.props;
    return <div>
        <h1 style={{textAlign:"center"}}>Kalvium gallary</h1>
        <div className='alignment'>
  {name.map((ele,i)=>{
    return <div key={ele.id}>
    <img src={ele.img} />
    </div>
  })};
        </div>
      </div>
  }
}
