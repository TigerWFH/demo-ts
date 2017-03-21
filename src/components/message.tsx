import * as React from 'react';
import * as ReactDOM from 'react-dom';


let instance: any = null;
let container: Element = null;

interface P {
    rtStyle?: any;//root style
    rtClassName?: any;//root class
    show?: boolean;
    content?: any;
}
interface S {
    show: boolean;
}

export class Message extends React.Component<P, S>{
    static defaultProps = {
        rtStyle: {},
        content: 'message'
    };
    static info: Function = (msg: any) => {
        let options = {
            show: true,
            content: msg
        };
        getInstance(options);
        setTimeout(closeMessage, 1000);
    }
    static warn: Function = (msg: any) => {
        let options = {
            show: true,
            content: msg
        };
        getInstance(options);
        setTimeout(closeMessage, 1000);
    }
    static error: Function = (msg: any) => {
        let options = {
            show: true,
            content: msg
        };
        getInstance(options);
        setTimeout(closeMessage, 1000);
    }
    _closeMessage = () => {
        if (container) {
            ReactDOM.unmountComponentAtNode(container);
            instance = null;
        }
    }
    constructor(props: P) {
        super(props);
        this.state = {
            show: this.props.show
        };
    }
    render() {
        let rtStyle = Object.assign({}, this.props.rtStyle,
            { display: this.state.show ? null : "none" });
        let rtCN = this.props.rtClassName ?
            this.props.rtClassName + ' mkMessage' : 'mkMessage';
        return (
            <div className={rtCN}>
                <div className="mkContent">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

function getInstance(options: any = {}) {
    if (!instance) {
        if (!container) {
            container = document.createElement('div');
            document.body.appendChild(container);
        }
        instance = ReactDOM.render(<Message {...options} />, container);
    }

    return instance;
}

function closeMessage() {
    if (container) {
        ReactDOM.unmountComponentAtNode(container);
        instance = null;
    }
}