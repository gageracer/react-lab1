import React from 'react';
import './home.css';
import logo from '../../../../src/logo.svg';
import News from '../../News/News';



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
                    
                <img src={logo} className="about-logo" alt="logo" />
                    
            </div>
        )
    };

}
