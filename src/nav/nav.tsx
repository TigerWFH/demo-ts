// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../components/basic/button';
import { Modal } from '../components/modal';
import { TextInput } from '../components/basic/input';
import { Message } from '../components/message';
import { Mask } from '../components/mask';
import { signon, signup } from './actions';

let items = [
    <li><a href="#">联系我</a></li>,
    <li><a href="#">文章</a></li>,
    <li><a href="#">主页</a></li>
];
interface P {
    items?: Array<React.ReactNode>;//菜单项
    signon?: Function;//登录函数
    signup?: Function;//注册函数
    signout?: Function;
    // signon
    isSignon?: boolean;//登录是否成功
    userName?: string;//后台数据
    userAvartar?: string;//后台数据
    token?: string;
    // signup
    isSignup?: boolean;//注册是否成功
    // signout
    isSignout?: boolean;//退出是否成功
}
interface S {
    isSignonPage?: boolean;
}
export class Nav extends React.Component<P, S>{
    refs: any;
    user: string = '';
    pwd: string = '';
    pwd2: string = '';
    static defaultProps = {
        items: items,
        isSignon: false,
        isSignup: false,
        userAvartar: './images/test.jpg'
    };
    constructor(props: P) {
        super(props);
        this.state = {
            isSignonPage: true
        };
    }
    _renderForm = () => {
        let fStyle = {
            width: '300px',
            padding: '20px 50px 50px 50px'
        };
        return (
            <div style={fStyle}>
                <TextInput onChange={this._onUser}
                    placeholder="请输入手机号/邮箱" />
                <TextInput onChange={this._onPwd}
                    type="password"
                    placeholder="请输入密码" />
                {
                    !this.state.isSignonPage ?
                        <TextInput onChange={this._onPwd2}
                            type="password"
                            placeholder="请再次输入密码" /> : null
                }
            </div>
        )
    }
    _renderAvartar = (isSignon: boolean) => {
        let bStyle = { display: "inline-block" };
        let elem = isSignon ?
            <div onClick={this._onSignout}
                style={{ cursor: "pointer" }}
                title="退出">
                <img src={this.props.userAvartar} alt="null" />
                <span className="userName">{this.props.userName}</span>
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
        this.setState({
            isSignonPage: true
        });
        this.refs.signonUp.show();
    }
    _onSignup = () => {
        this.setState({
            isSignonPage: false
        });
        this.refs.signonUp.show();
    }
    _onSignout = () => {
        let { signout } = this.props;
        signout();
        Message.success('退出成功');
    }
    _onUser = (text: string, self: any) => {
        this.user = text;
    }
    _onPwd = (text: string, self: any) => {
        this.pwd = text;
    }
    _onPwd2 = (text: string, self: any) => {
        this.pwd2 = text;
    }
    _onOk = () => {
        let { isSignonPage } = this.state;
        let { signon, signup } = this.props;
        let user = this.user;
        let pwd = this.pwd;
        if (!user || !pwd) {
            Message.info('账户/密码为空');
            return;
        }
        if (!isSignonPage) {
            let pwd2 = this.pwd2;
            if (!pwd2 || pwd !== pwd2) {
                Message.info('密码为空或两次输入密码不一致');
                return;
            }
            signup({ username: user, password: pwd });
            Mask.mountMask();
            this.refs.signonUp.hide();
            return;
        }
        Mask.mountMask();
        signon({ username: user, password: pwd });
        this.refs.signonUp.hide();
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.isSignon) {
            Message.success('登录成功');
        }
        if (!nextProps.isBeginAjax) {
            Mask.unmountMask();
        }
    }
    render() {
        return (
            <nav className="wrapper">
                <ul>
                    {this.props.items}
                </ul>
                <span className="avartar">
                    {this._renderAvartar(this.props.isSignon)}
                </span>
                <Modal title="注册登录"
                    ref="signonUp"
                    onOk={this._onOk}
                    content={this._renderForm} />
            </nav>
        )
    }
}