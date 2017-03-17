import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TextInput } from './basic/input';


interface P {
    data?: Array<any>;
}
interface S { }
export class Form extends React.Component<P, S>{
    static defaultProps = {
        data: [{
            label: 'name',
            type: 'text'
        }]
    };
    constructor(props: P) {
        super(props);
    }
    _renderComponent = (params: any) => {
        let elem = null;
        switch (params.type) {
            case 'text':
                elem = <div>
                    <TextInput placeholder={params.title} />
                </div>;
                break;
        }
        return (
            <div className="mkFormComponent">
                {elem}
            </div>
        )
    }
    render() {
        return (
            <div className="mkForm">
                {this._renderComponent({ type: 'text', title: '请输入手机号/邮箱' })}
            </div>
        );

    }
}