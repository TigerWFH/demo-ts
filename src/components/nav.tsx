// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';


let items = [
    <li><a href="#">联系我</a></li>,
    <li><a href="#">文章</a></li>,
    <li><a href="#">主页</a></li>
];
interface P {
    items?: Array<React.ReactNode>;
}
interface S {
    userName?: any;
    userAvartar?: string;
    isSignin?: boolean;
}
export class Nav extends React.Component<P, S>{
    static defaultProps = {
        items: items
    }
    constructor(props: P) {
        super(props);
        this.state = {
            userAvartar: './images/test.jpg',
            userName: "monkey",
            isSignin: false
        };
    }
    _renderAvartar = (isLogin: boolean) => {
        let elem = isLogin ?
            <div onClick={this._onSignout}>
                <img src={this.state.userAvartar} alt="null" />
                <span>{this.state.userName}</span>
            </div> :
            <div>
                <button onClick={this._onSignon}>登录</button>
                <button onClick={this._onSignup}>注册</button>
            </div>;
        return elem;
    }
    _onSignon = () => {
        this.setState({
            isSignin: true
        });
    }
    _onSignup = () => {

    }
    _onSignout = () => {
        this.setState({
            isSignin: false
        });
    }
    render() {
        return (
            <nav className="wrapper">
                <ul>
                    {this.props.items}
                </ul>
                <span className="avartar">
                    {this._renderAvartar(this.state.isSignin)}
                </span>
            </nav>
        )
    }
}