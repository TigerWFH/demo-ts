// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// components and utils
// models

interface FooterProps {
    content?: React.ReactNode | string;
}
interface FooterState { }

export class AppFooter extends React.Component<FooterProps, FooterState>{
    static defaultProps = {
        content: "appFooter"
    };
    constructor(props: FooterProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="appFooter">
                {this.props.content}
            </div>
        )
    }
}
