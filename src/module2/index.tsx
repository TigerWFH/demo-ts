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
// models

interface P { }
interface S { }
export class Module2 extends React.Component<P, S>{
    refs: any;
    constructor(prop: P) {
        super(prop)
    }
    _onTest = () => {
        this.refs.modal.show();
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <AppHeader title={<Nav />}
                    logo={<Logo />} />
                <ViewPage>
                    <Button onClick={this._onTest}
                        text="test">
                    </Button>
                    <div style={{
                        margin: "auto auto",
                        width: "1080px",
                        border: "1px solid red",
                        textAlign: "center"
                    }}>
                        我要居中<br />
                        asdfasdfsaf
                    </div>
                    <AppFooter />
                </ViewPage>
                <Modal ref="modal" />
            </div>
        )
    }
}