// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ButtonProps {
    style?: any;
    text?: string;
    title?: string;
    className?: string;
    onClick?: { (instance: any): void }
    iconLeft?: string;//图标在左边，优先级为2（支持的是字体图标）
    iconRight?: string;//图标在右边，优先级为3（支持的是字体图标）
    iconOnly?: string;//仅仅显示图标,优先级为1（最高）（支持的是字体图标）
}
interface ButtonState {
    text?: string;
}

export class Button extends React.Component<ButtonProps, ButtonState>{
    refs: any;
    // 初始化列表
    static defaultProps = {
        text: 'BUTTON'
    };
    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            text: null
        };
    }
    // 外部调用接口列表
    changeText = (text: string) => {
        this.setState({
            text: text
        });
    }
    // 内部调用接口列表
    _onClick = () => {
        this.props.onClick && this.props.onClick(this);
    }
    render() {
        let className = this.props.className ?
            this.props.className + ' ' : '';
        let content: React.ReactNode;
        if (this.props.iconOnly) {
            content = <i className={this.props.iconOnly}></i>
        }
        else {
            content = this.props.iconLeft ?
                <span>
                    <i className={this.props.iconLeft}>
                    </i>
                    <span className="text">
                        {this.state.text || this.props.text}
                    </span>
                </span> :
                this.props.iconRight ?
                    <span>
                        <span className="text">
                            {this.state.text || this.props.text}
                        </span>
                        <i className={this.props.iconRight}>
                        </i>
                    </span> :
                    <span className="text">
                        {this.state.text || this.props.text}
                    </span>;
        }
        return (
            <div className='monkeyButtonWrapper' style={this.props.style}>
                <button className={className + 'defaultButton'}
                    title={this.props.title}
                    onClick={this._onClick}>
                    {
                        content
                    }
                </button>
            </div>
        )
    }
}