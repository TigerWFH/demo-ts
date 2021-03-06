// name: index.tsx
// author: monkey@lwork.com
// date: 10-8-2016
// functions:

// libs
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory, browserHistory } from 'react-router'
import 'es6-shim'
import { Provider } from 'react-redux'
import store from './store'
// modules
import Module1 from './module1/containers/index'
import { Module2 } from './module2'
import { Module3 } from './module3'
interface P { }
interface S { }
class App extends React.Component<P, S> {
	render() {
		return (
			<div style={{ width: '100%', height: '100%' }}>
				{this.props.children}
			</div>
		)
	}
}


let elem: JSX.Element = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Module2} />
				<Route path="first" component={Module1}>
				</Route>
				<Route path="second" component={Module2}>
				</Route>
			</Route>
		</Router>
	</Provider>
)
ReactDOM.render(elem, document.getElementById('main'));
