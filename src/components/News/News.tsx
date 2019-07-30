import React, { Component } from 'react';
import './news.css';
import NewBox from './NewBox';


class News extends Component {
    render() {
        return (
            <div id="news-head">
                News
                {/* {this.props.children} */}
                {newsdata.map((data) => {
                   return <NewBox date={data.date} title={data.title} text={data.text}/>;
                })
                }
            </div>
        );
    }
}

export default News;

const newsdata = [
    {
        date: "01.2019",
        title: "Fire in Paris",
        text: "Some guy did something and it happened like that"
    },
    {
        date: "01.2019",
        title: "Fire in Paris",
        text: "Some guy did something and it happened like that"
    },
    {
        date: "01.2019",
        title: "Fire in Paris",
        text: "Some guy did something and it happened like that"
    }
]