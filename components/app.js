import React from 'react'
import {connect} from 'react-redux'
import Home from './home'
import {decrement, increment} from '../redux/actions/banco'
import _ from 'lodash'
// layaout

const App = React.createClass({
	/*displayName: 'App',
	propTypes: {
		banco: React.PropTypes.object.isRequired,
		onIncrement: React.PropTypes.func.isRequired
	},*/
	/*componentWillMount() {
		this.props.onIncrement();
	},*/

	render() {
		return (
		  <div>
				<h1>APP PAGE</h1>
        <Home {...this.props} />
		  </div>
		)
	}
})

const mapStateToProps = (state) => {
	return {
		banco: _.get(state, 'banco', {})
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement() {
			dispatch(increment());
		},
		onDecrement() {
			dispatch(decrement());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
