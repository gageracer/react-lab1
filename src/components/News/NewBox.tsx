import React, { Component } from 'react';
import './news.css';
import logo from '../../../src/logo.svg';

class NewBox extends Component {
    render() {
        return (
            <div className="newbox">
                <div className="newbox-date">01.2019</div>
                <div className="newbox-img"><img src={logo} className="newbox-img"  alt="logo" /></div>
                <div className="newbox-info">
                    <div className="newbox-title">Title</div>
                    <div className="newbox-sum">Summary temporary text for you to read.</div>
                </div>
            </div>
        );
    }
}

export default NewBox;