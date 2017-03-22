// libs
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// components and utils
import Card from '../components/basic/card'
import { AppHeader } from '../components/appHeader';
import { AppSidebar } from '../components/appSidebar';
import { AppFooter } from '../components/appFooter';
import { AppContent } from '../components/appContent';
import { ViewPage } from '../components/basic/viewPage';
import { Button } from '../components/basic/button';
import Nav from '../nav/containers';
import { Logo } from '../nav/components/logo';
import { Modal } from '../components/modal';
import { Mask } from '../components/mask';
import { Message } from '../components/message';
// models

interface P { }
interface S { }
export class Module2 extends React.Component<P, S>{
    refs: any;
    constructor(prop: P) {
        super(prop)
    }
    _onTest = () => {
        Mask.mountMask({ show: true });
        setTimeout(() => {
            Mask.unmountMask();
        }, 5000);
    }
    _onTest1 = () => {
        Message.success('success');
    }
    _onTest2 = () => {
        Message.info('info');
    }
    _onTest3 = () => {
        Message.warn('warning');
    }
    _onTest4 = () => {
        Message.error('error');
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <AppHeader title={<Nav test="123" />}
                    logo={<Logo />} />
                <ViewPage>
                    <Button text="testMask"
                        onClick={this._onTest}>
                    </Button>
                    <Button text="MessageSuccess"
                        onClick={this._onTest1}>
                    </Button>
                    <Button text="MessageInfo"
                        onClick={this._onTest2}>
                    </Button>
                    <Button text="MessageWarn"
                        onClick={this._onTest3}>
                    </Button>
                    <Button text="MessageError"
                        onClick={this._onTest4}>
                    </Button>
                    <div style={{
                        margin: "auto auto",
                        width: "1080px",
                        border: "1px solid red",
                        textAlign: "center",
                        fontSize: "26px"
                    }}>
                        lalalala
                        {/*欢迎来到我的主页，前端是使用react全家桶配上Typescript使用webpack编译完成的<br />
                        后台这是使用nodejs实现的，目前仅仅实现了登录和注册接口，并在进一步优化中。<br />
                        个人项目还在继续ing,欢迎你的指导<br />*/}
                    </div>
                    {/*<AppFooter content="联系QQ:1083584640;QQ群:【js/nodejs】130077909" />*/}
                    <AppFooter content="脚注" />
                </ViewPage>
                <Modal ref="modal" />
            </div>
        )
    }
}