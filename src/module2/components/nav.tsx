// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../../components/basic/button';
import { Modal } from '../../components/modal';


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
    refs: any;
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
        let bStyle = { display: "inline-block" };
        let elem = isLogin ?
            <div onClick={this._onSignout}
                style={{ cursor: "pointer" }}
                title="退出">
                <img src={this.state.userAvartar} alt="null" />
                <span className="userName">{this.state.userName}</span>
            </div> :
            <div>
                <Button onClick={this._onSignon}
                    style={bStyle}
                    text="登录">
                </Button>
                <Button onClick={this._onSignup}
                    style={bStyle}
                    text="注册">
                </Button>
            </div>;
        return elem;
    }
    _onSignon = () => {
        // this.setState({
        //     isSignin: true
        // });
        this.refs.signon.show();
    }
    _onSignup = () => {

    }
    _onSignout = () => {
        this.setState({
            isSignin: false
        });
    }
    _onOk = () => {
        // post
        setTimeout(() => {
            this.setState({
                isSignin: true
            });
            alert('登录成功!');
        }, 1000);
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
                <Modal title="注册登录"
                    ref="signon"
                    onOk={this._onOk} />
            </nav>
        )
    }
}