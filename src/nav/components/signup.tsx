import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal } from '../../components/modal';

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
}
interface S { }

export class SignUp extends React.Component<P, S>{
    refs: any;
    static defaultProps = {
        rtStyle: {}
    };
    constructor(props: P) {
        super(props);
    }

    show = () => {
        this.refs.signup.show();
    }
    hide = () => {
        this.refs.signup.hide();
    }
    _renderForm = () => {
    }
    componentDidMount() {
        console.log('did mount')
        let { rt, ...others } = { rt: 'rt', name: 'monkey', age: 123 };
    }
    render() {
        // let { rtClassName, ...others } = this.props;
        let { rt, ...others } = { rt: 'rt', name: 'monkey', age: 123 };
        // console.log('props--->', rtClassName);
        // console.log('props--->', others);
        return (
            <Modal ref="signup"
                content="signup" />
        )
    }
}