// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface SelectData {
    label: Monkey.MonkeyText;
    value: Monkey.MonkeyText;
}

interface SelectProps {
    data?: Array<SelectData>;
    className?: string;//整个控件的样式
    textStyle?: {};//选定文本样式
    menuStyle?: {};//菜单样式
    onChange?: { (text: string, self: any): void };
    iconUp?: string;
    iconDown?: string;
}
interface SelectState {
    label?: Monkey.MonkeyText;
    value?: Monkey.MonkeyText;
    selectedIndex?: number;
    isDown?: boolean;
}

export class Select extends React.Component<SelectProps, SelectState>{
    refs: any;
    isShowMenu: boolean = false;
    // 初始化列表
    static defaultProps = {
        iconDown: 'iconfont icon-xiangxia01',
        iconUp: 'iconfont icon-xiangshang01'
    };
    constructor(props: SelectProps) {
        super(props);
        let data = this.props.data;
        let label: Monkey.MonkeyText = '';
        let value: Monkey.MonkeyText = '';
        let selectedIndex = -1;
        if (data instanceof Array) {
            if (data.length > 0) {
                label = data[0].label;
                value = data[0].value;
                selectedIndex = 0;
            }
        }
        this.state = {
            label: label,
            value: value,
            selectedIndex: selectedIndex,
            isDown: true
        };
    }
    // 外部调用接口列表
    getSelectedItem = () => {
        return {
            label: this.state.label,
            value: this.state.value
        };
    }
    setSelectedItemByIndex = (selectedIndex: number) => {
        let data = this.props.data;
        let length = 0;
        if (data instanceof Array) {
            length = data.length;
        }
        if (selectedIndex < 0 || selectedIndex >= length) {
            return;
        }
        this.setState({
            label: data[selectedIndex].label,
            value: data[selectedIndex].value,
            selectedIndex: selectedIndex
        });
    }
    setSelectedItemByLabel = (label: string) => {
        let data = this.props.data;
        let index = -1;
        let item: SelectData;
        if (data instanceof Array) {
            item = data.find((item: SelectData, index: number) => {
                if (item.label === label) {
                    index = index;
                    return true;
                }
            });
            if (item) {
                this.setState({
                    label: item.label,
                    value: item.value,
                    selectedIndex: index
                });
            }
        }
    }

    isMenuShow = () => {
        this._onIsShowMenu();
    }
    // 内部调用接口列表
    _onIsShowMenu = () => {
        if (!this.isShowMenu) {
            this.refs.wrapper.className = "open";
        }
        else {
            this.refs.wrapper.className = "";
        }
        this.isShowMenu = !this.isShowMenu;
        this.setState({
            isDown: !this.state.isDown
        });
    }
    _renderOptions = (data: Array<SelectData>) => {
        if (!(data instanceof Array)) {
            return [];
        }
        let liList = data.map((item: SelectData, index: number) => {
            let style = item.label === this.state.label ? { color: '#00a3fe' } : null;
            let menuStyle = this.props.menuStyle ? this.props.menuStyle : {};
            return <li style={Object.assign({}, style, menuStyle)}
                onClick={this._onMenuItem.bind(null, item, index)}
                >
                {item.label}
            </li>
        });

        return liList;
    }
    _onMenuItem = (item: SelectData, index: number) => {
        this.setState({
            label: item.label,
            value: item.value,
            selectedIndex: index,
        });
        this._onIsShowMenu();
    }
    render() {
        let className = this.props.className ?
            this.props.className + ' ' : '';
        let icon = this.state.isDown ?
            'icons ' + this.props.iconDown :
            'icons ' + this.props.iconUp;
        return (
            <div className={className + "monkeySelectWrapper"}>
                <div ref="wrapper">
                    <span className="selectedLabel"
                        style={this.props.textStyle}
                        onClick={this._onIsShowMenu}>
                        <span className="label">
                            {this.state.label || ''}
                        </span>
                        <i className={icon}></i>
                    </span>
                    <ul className="selectMenu">
                        {this._renderOptions(this.props.data)}
                    </ul>
                </div>
            </div>
        )
    }
}