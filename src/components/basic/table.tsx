// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';


enum SortDirection {
    Asc = 1,
    Desc
}
export interface TableColumnsOptions {
    title?: string;//表头显示字段(优先级高于renderHeader属性)
    key: string;//用于React批量产生element时的key值
    dataIndex: string;//指定每列的key值，通过该值获取对应的数据
    renderHeader?: (title: string) => any;//(优先级低于title属性)
    renderFooter?: () => any;
    renderCell?: (rowData: any, dataIndex: string, instance: any) => any;
    headerClickHandler?: (value: TableColumnsOptions, direction: SortDirection, instance: any) => void;
    width?: Monkey.MonkeyText;
    sortable?: boolean;//能否排序
    sortFunction?: (paramA: any, paramB: any) => number;
}
interface TableProps {
    data?: Array<any>;//数据
    defaultData?: Array<any>;
    columns?: Array<TableColumnsOptions>;
}
interface TableState {
    data?: Array<any>;
    sortDataIndex?: string;
    sortDirection?: SortDirection;
    sortFunction?: (paramA: any, paramB: any) => number;
}

export class Table extends React.Component<TableProps, TableState>{
    static defaultProps = {//保证了数据的存在
        data: [] as Array<any>,
        columns: [] as Array<TableColumnsOptions>
    };
    constructor(props: TableProps) {
        super(props);
        this.state = {
            data: this.props.data || this.props.defaultData
        };
    }
    _sortData = (data: Array<any>, dataIndex: string, direction: SortDirection) => {
        let _data = data;
        let _dataIndex = dataIndex;
        let _state = this.state;
        if (!_data || !(_data instanceof Array) || !_dataIndex) {
            return;
        }
        let _defaultSortFunc = (paramA: any, paramB: any) => {
            let aValue = paramA[_dataIndex];
            let bValue = paramB[_dataIndex];
            if (direction === SortDirection.Asc) {
                return aValue < bValue ? -1 : (aValue === bValue ? 0 : 1);
            }
            else {
                return aValue < bValue ? 1 : (aValue === bValue ? 0 : -1);
            }
        };
        let _compareFunc = _state.sortFunction || _defaultSortFunc;
        return _data.sort(_compareFunc);
    }
    _createTableHeader = (columns: Array<TableColumnsOptions>) => {//th
        let self = this;
        let _columns = columns;
        if (!(_columns instanceof Array)) {
            return null;
        }
        let _hasHeader = _columns.some(value => !!value.renderHeader || !!value.title);
        let _state = this.state;
        let _element: React.ReactNode = _hasHeader && <thead>
            <tr className="defaultHeader">
                {
                    _columns.map((value: TableColumnsOptions) => {
                        let _clickHandler = value.sortable ? () => {
                            let direction = SortDirection.Desc;
                            if (value.dataIndex === _state.sortDataIndex) {
                                direction = _state.sortDirection === SortDirection.Asc ?
                                    SortDirection.Desc : SortDirection.Asc;
                            }
                            else {
                                direction = SortDirection.Asc;
                            }
                            console.log('direction-->', direction);
                            if (_state.sortDataIndex !== value.dataIndex || _state.sortDirection !== direction) {
                                this.setState({
                                    sortDataIndex: value.dataIndex,
                                    sortDirection: direction,
                                    sortFunction: value.sortFunction
                                });
                            }
                            else {
                                this.setState({
                                    sortFunction: value.sortFunction
                                });
                            }
                            value.headerClickHandler && value.headerClickHandler(value, direction, self);
                        } : undefined;
                        return <th className="headerCell" onClick={_clickHandler}
                            key={'th-' + value.key}>
                            {(value.renderHeader && value.renderHeader(value.title)) || value.title}
                        </th>
                    })
                }
            </tr>
        </thead>;
        return _element;
    }
    _createTableFooter = (columns: Array<TableColumnsOptions>) => {//td
        let _columns = columns;
        if (!(_columns instanceof Array)) {
            return null;
        }
        let hasFooter = _columns.some(value => !!value.renderFooter)
        let element: React.ReactNode = hasFooter && <tfoot>
            <tr className="defaultFooter">
                {
                    _columns.map((value: TableColumnsOptions, index: number) => {
                        return <td className="footerCell" key={"cell-" + index}>
                            {value.renderFooter && value.renderFooter()}
                        </td>
                    })
                }
            </tr>
        </tfoot>;
        return element;
    }
    _createTableBody = (data: Array<any>, columns: Array<TableColumnsOptions>) => {//td
        let _data = data;
        let _columns = columns;
        let _state = this.state;
        if (!(_data instanceof Array)) {
            return null;
        }
        if (!(_columns instanceof Array)) {
            return null;
        }
        if (_state.sortDataIndex && _state.sortDirection) {
            _data = this._sortData(_data, _state.sortDataIndex, _state.sortDirection);
        }
        let _rowList = _data.map((rowData: any, index: number) => {
            return <tr className="defaultBody" key={'row-' + index} >
                {this._createTableCells(rowData, index, _columns)}
            </tr>;
        });
        let _element: React.ReactNode = <tbody>
            {
                _rowList
            }
        </tbody>
        return _element;
    }
    _createTableCells = (rowData: any, rowIndex: number, columns: Array<TableColumnsOptions>) => {
        let _rowData = rowData;
        let _rowIndex = rowIndex;//行号
        let _columns = columns;
        if (!(_rowData instanceof Object)) {
            return null;
        }
        if (typeof _rowIndex !== 'number') {
            return null;
        }
        if (!(_columns instanceof Array)) {
            return null;
        }
        return _columns.map((header: TableColumnsOptions, colIndex: number) => {
            let _dataIndex = header.dataIndex;
            let _value = _rowData[_dataIndex];
            let _renderCell = header.renderCell ? header.renderCell(_rowData, _dataIndex, this) : _value;
            return <td className="bodyCell" key={'cell-' + _rowIndex + '-' + colIndex}>
                {_renderCell}
            </td>;
        });
    }
    render() {
        let width: string;
        let colList = this.props.columns.map((value: TableColumnsOptions) => {
            if (typeof value.width === 'number') {
                width = value.width + 'px';
            }
            else if (typeof value.width === 'string') {

            }
        })
        return <table className="monkeyTableWrapper">
            {this._createTableHeader(this.props.columns)}
            {this._createTableFooter(this.props.columns)}
            {this._createTableBody(this.state.data, this.props.columns)}
        </table>
    }
}