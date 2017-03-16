// 网站宣传
// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// components and utils
// modal

interface ViewPageProps { }
interface ViewPageState { }

export class ViewPage extends React.Component<ViewPageProps, ViewPageState> {
    refs: any;
    constructor(props: ViewPageProps) {
        super(props);
    }
    render() {
        return (
            <article className="viewPage">
                {this.props.children}
            </article>
        )
    }
}