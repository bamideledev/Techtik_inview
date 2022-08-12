import React, {Component} from 'react'

class Me extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: 'Welcome me to my website'
        };
        this.updatesetState = this.updatesetState.bind(this);
    }
    updatesetState() {
        this.setState({
            msg: 'niyidev'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.updatesetState}>Check</button>
                <h3>{Math.random()}</h3>
            </div>
        );
    }
}
export default Me;