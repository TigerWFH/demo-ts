import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from './basic/button';

interface P {
    show?: boolean;
    title?: string | React.ReactNode;
    content?: string | Function;
    hasFooter?: boolean;
    okText?: string;
    cancelText?: string;
    onOk?: Function;
    onCancel?: Function;
}
interface S {
    show?: boolean;
}

export class Modal extends React.Component<P, S>{
    static defaultProps = {
        show: false,
        content: '',
        okText: '确定',
        cancelText: '离开'
    };
    constructor(props: P) {
        super(props);
        this.state = {
            show: this.props.show
        };
    }
    show = () => {
        this.setState({
            show: true
        });
    }
    hide = () => {
        this.setState({
            show: false
        });
    }
    _createTitle = () => {
        let title = this.props.title;
        return (
            <div className="mkTitle">
                {title}
            </div>
        )
    }
    _createFooter = () => {
        let { okText, cancelText } = this.props;
        let bStyle = { display: "inline-block" };
        return (
            <div className="mkFooter">
                <Button text={okText}
                    onClick={this._onOk}
                    style={bStyle}>
                </Button>
                <Button text={cancelText}
                    onClick={this._onCancel}
                    style={bStyle}>
                </Button>
            </div>
        )
    }
    _onOk = () => {
        let { onOk } = this.props;
        if (typeof onOk === "function") {
            onOk();
        }
        // this.hide();
    }
    _onCancel = () => {
        let { onCancel } = this.props;
        if (typeof onCancel === "function") {
            onCancel();
        }
        this.hide();
    }
    render() {
        let mStyle = { display: this.state.show ? "flex" : "none" };
        let { title, content } = this.props;
        return (
            <div className="mkModalWrapper" style={mStyle}>
                <div className="mkModal">
                    {!!title && this._createTitle()}
                    <div className="mkContent">
                        {typeof content === 'function' ? content() : content}
                    </div>
                    {this._createFooter()}
                </div>
            </div>
        )
    }
}