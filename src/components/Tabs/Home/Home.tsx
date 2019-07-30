import React from 'react';
import './home.css';
import logo from '../../../../src/logo.svg';
import News from '../../News/News';
import NewBox from '../../News/NewBox';


export default class Home extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div id="home">
                <News/>
                    
                <img src={logo} className="App-logo" alt="logo" />
                    
            </div>
        )
    };

}
