import React, { Component} from 'react'

class ClassMouse extends component {
    constructor (){
        super();
        this.state = {
            x:0,
            y:0
        }
    }
    logMousePosition = e =>{
        this.setState({
            x: e.ClientX, Y: e.ClientY})
    }
    componentDidMouse(){
        window.addEventListener('mousemove' , this.logMousePosition)
    }
    componentWillMount(){
        window.addEventListener('mousemove', this.logMousePosition)
    }
    render(){
        return(
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        )
}
}
