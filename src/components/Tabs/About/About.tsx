import React from 'react';
import logo from '../../../../src/logo.svg';
import './about.css';

type MyState = {
    isLeft: boolean,
}

export default class Home extends React.Component<{},MyState> {
    state = {
        isLeft: true
    }

    changeSide = (bool:boolean) =>{
        if(bool){
            this.setState({
                isLeft: false
            })
        }
        else{
            this.setState({
                isLeft: true
            })
        }
    }
    render() {

        return (
            <div id="about">
                <img src={logo} className="App-logo" alt="logo" />
                <div id="task2">
                    <h1>
                        {this.state.isLeft ? "This is Left Text!":"This is Right Text!"}
                        
                    </h1>
                    <div id="task2-but">
                        <button onClick={() => this.changeSide(false)}>Show Left</button>
                        <button onClick={() => this.changeSide(true)}>Show Right</button>
                    </div>
                    
                </div>
                
            </div>
        )
    };

}
