import React from 'react';
import './home.css';
import logo from '../../../../src/logo.svg';


export default class Home extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div id="home">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    };

}
