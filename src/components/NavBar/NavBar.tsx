import React from 'react';
import './navbar.css';

type MyProps = {
    message: number;
}

type MyState = {
    count: number;
}

export default class NavBar extends React.Component<MyProps,MyState> {

    constructor(props:any){
        super(props)
    }
    state: MyState = {
        count: this.props.message,
    };
        // private rootStore: any;
    // private chatStore: any;
    // private authStore: any;
    // private chatTextInput: any = null;
    // private sendText: string;
    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         openchatDetail: false,
    //         modal: false,
    //         openNewWindow: false,
    //         text: "",
    //         textInPreview: "",
    //         file: null,
    //         isShowTagpanel: false,
    //         isShowBar: false,
    //         isShowPreview: false,
    //         isShowRanking: false,
    //         loadEnded: false,
    //         showEalierMsg: true,
    //         arrPhoto: [],
    //         colorTheme: true, // true for dark theme
    //         starredList: [],
    //     }
    //     this.handleChange = this.handleChange.bind(this);
    //     this.rootStore = this.props.rootStore;
    //     this.chatStore = this.rootStore.chatStore;
    //     this.authStore = this.rootStore.authStore;
    //     this.chatTextInput = React.createRef();
    //     this.sendText = "";
    // }
    
    componentDidMount() {
        let currentCounter:number;
        let timer = setInterval(() => {
            currentCounter = this.state.count;
            if (currentCounter === 1) {
                clearInterval(timer);
            }
            this.setState({ count: currentCounter - 1 });
        }, 1000);
    }

    render(){
        
        return(
            <div className="nav">
                <a href="#home" className="navLink"> Home</a>
                <a href="#about"> About</a>
                <a href="#projects"> Projects</a>
                <a href="#contact"> Contact</a>
                <div>{this.state.count}</div>
            </div>
        )
    };
    
}
