import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface P{}
interface S{ }

export class Modal extends React.Component<P, S>{
    static defaultProps = {};
    constructor(props: P) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="modal">
                {this.props.children}
            </div>
        )
    }
}