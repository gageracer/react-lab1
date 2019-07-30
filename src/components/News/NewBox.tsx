import React, { Component } from 'react';
import './news.css';
import logo from '../../../src/logo.svg';

type MyProps = {
    date: string;
    title: string;
    text: string;
}

class NewBox extends Component<MyProps> {
    
    constructor(props: any) {
        super(props)
    }
    // state: MyState = {
    //     count: this.props.message,
    // };
    render() {
        return (
            <div className="newbox">
                <div className="newbox-date">{this.props.date}</div>
                <div className="newbox-img"><img src={logo} className="newbox-img"  alt="logo" /></div>
                <div className="newbox-info">
                    <div className="newbox-title">{this.props.title}</div>
                    <div className="newbox-sum">{this.props.text}Summary temporary text for you to read.</div>
                </div>
            </div>
        );
    }
}

export default NewBox;