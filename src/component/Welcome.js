import React from "react";
import { Component } from "react";
import Welcome2 from "./Welcome2";
/*
Getting familier with components.
*/

/*
This is function type of a component.
*/
function Welcome(props){
    return (
    <div>
        Welcome {props.name} a.k.a {props.realName}
    </div>
    )
}

/*
This is Class type Component

class Welcome extends Component{
    render(){
        return <h1>Wecome using Class Component</h1>
    }
}
*/
/*
const Welcome = () =>{
    return <h1>Welcome using arrow function method</h1>
}
*/
export default Welcome;
