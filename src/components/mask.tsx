import * as React from 'react';
import * as ReactDOM from 'react-dom';

let instance: any = null;
let container: Element = null;


interface P {
    show?: boolean;
}
interface S {
    show?: boolean;
}
export class Mask extends React.Component<P, S>{
    static show: Function;
    constructor(props: P) {
        super(props);
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
    render() {
        let rootStyle = {
            display: this.state.show ? null : 'none'
        };
        return (
            <div className="mkMask" style={rootStyle}>
                loading
            </div>
        )
    }
}

function getMaskInstance() {
    if (!instance) {
        if (!container) {
            container = document.createElement('div');
            document.body.appendChild(container);
        }
        instance = ReactDOM.render(<Mask show={true} />, container);
    }

    return instance;
}

Mask.show = () => {

}