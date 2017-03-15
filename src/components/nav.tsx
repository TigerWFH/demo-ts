// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';


let items = [
    <li><a href="#">home</a></li>,
    <li><a href="#">article</a></li>,
    <li><a href="#">contact</a></li>
];
interface P {
    items?: Array<React.ReactNode>;
}
interface S {
    userName: string;
    userAvartar: string;
    isLogin?: boolean;
}
export class Nav extends React.Component<P, S>{
    static defaultProps = {
        items: items
    }
    constructor(props: P) {
        super(props);
        this.state = {
            userAvartar: './images/test.jpg',
            userName: 'monkey',
            isLogin: true
        };
    }
    render() {
        let sStyle = this.state.isLogin ? null : { display: "none" };
        return (
            <nav className="wrapper">
                <ul>
                    {this.props.items}
                </ul>
                <span className="avartar" style={sStyle}>
                    <img src={this.state.userAvartar} alt="null" />
                    <span>{this.state.userName}</span>
                </span>
            </nav>
        )
    }
}