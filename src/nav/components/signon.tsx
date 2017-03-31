import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal } from '../../components/modal';

interface P {
}
interface S { }

export class SignOn extends React.Component<P, S>{
    refs: any;
    static defaultProps = {
    };
    constructor(props: P) {
        super(props);
        this.state = {};
    }
    show = () => {
        this.refs.signon.show();
    }
    hide = () => {
        this.refs.signon.hide();
    }
    render() {
        return (
            <Modal ref="signon" content="signon" />
        )
    }
}