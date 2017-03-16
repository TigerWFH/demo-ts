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
import { Nav } from './components/nav';
import { Logo } from './components/logo';
import { Modal } from '../components/modal';
// models

interface P { }
interface S { }
export class Module2 extends React.Component<P, S>{
    constructor(prop: P) {
        super(prop)
    }

    _onTest = () => {
        let node = document.createElement('div');
        node.className = 'modal';
        document.getElementsByTagName('body')[0].appendChild(node);
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <AppHeader title={<Nav />}
                    logo={<Logo />} />
                <ViewPage>
                    <button onClick={this._onTest}>
                        123123
                            </button>
                    <div style={{ margin: "auto auto", width: "1080px", border: "1px solid red", textAlign: "center" }}>
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        我要居中<br />
                        asdf
                        asdfsaf
                    </div>
                    <AppFooter />
                </ViewPage>
            </div>
        )
    }
}