import React, { Component } from 'react';
import './news.css';


class News extends Component {
    render() {
        return (
            <div id="news-head">
                News
                {this.props.children}
            </div>
        );
    }
}

export default News;