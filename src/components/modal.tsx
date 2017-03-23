import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from './basic/button';

interface P {
    rtClassName?: string;//root class
    rtStyle?: any;//root style
    mlClassName?: string;
    mlStyle?: any;
    hrClassName?: string;
    htStyle?: any;
    ctClassName?: string;//content class
    ctStyle?: any;//content style
    frClassName?: string;
    frStyle?: any;
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
        rtStyle: {},
        mlStyle: {},
        hrStyle: {},
        ctStyle: {},
        frStyle: {},
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
        let rtStyle = Object.assign({},
            this.props.rtStyle,
            { display: this.state.show ? "flex" : "none" });
        let rtCN = this.props.rtClassName ?
            this.props.rtClassName + ' mkModalWrapper' : 'mkModalWrapper';
        let mlCN = this.props.mlClassName ?
            this.props.mlClassName + ' mkModal' : 'mkModal';
        let ctCN = this.props.ctClassName ?
            this.props.ctClassName + ' mkContent' : 'mkContent';
        let { title, content } = this.props;
        return (
            <div className={rtCN} style={rtStyle}>
                <div className={mlCN} style={this.props.mlStyle}>
                    {!!title && this._createTitle()}
                    <div className={ctCN} style={this.props.ctStyle}>
                        {typeof content === 'function' ? content() : content}
                    </div>
                    {this._createFooter()}
                </div>
            </div>
        )
    }
}