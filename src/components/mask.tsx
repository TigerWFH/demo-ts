import * as React from 'react';
import * as ReactDOM from 'react-dom';

let instance: any = null;
let container: Element = null;


interface P {
    show?: boolean;
    content?: any;
    rtStyle?: any;//rootStyle
    rtClassName?: any;//rootClass
    ctStyle?: any;//conentStyle
    ctClassName?: any;//contentClass
}
interface S {
    show?: boolean;
}
export class Mask extends React.Component<P, S>{
    static defaultProps = {
        content: "Loading",
        rtStyle: {},
        ctStyle: {}
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
    static mountMask: Function = (options: any = {}) => {
        options.show = true;
        getMaskInstance(options);
    }
    static unmountMask: Function = () => {
        if (container) {
            ReactDOM.unmountComponentAtNode(container);
            instance = null;
        }
    }
    render() {
        let rtStyle = Object.assign({}, this.props.rtStyle,
            {
                display: this.state.show ? null : 'none'
            });
        let ctStyle = Object.assign({}, this.props.ctStyle,
            {
                display: this.state.show ? null : 'none'
            });
        let rtCN = this.props.rtClassName ? this.props.rtClassName + ' mkMask' : 'mkMask';
        let ctCN = this.props.ctClassName ? this.props.ctClassName + ' mkContent' : 'mkContent'
        return (
            <div className={rtCN} style={rtStyle}>
                <div className={ctCN} style={ctStyle}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

function getMaskInstance(options: P = {}) {
    if (!instance) {
        if (!container) {
            container = document.createElement('div');
            document.body.appendChild(container);
        }
        instance = ReactDOM.render(<Mask {...options} />, container);
    }

    return instance;
}