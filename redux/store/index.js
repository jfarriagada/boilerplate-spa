/*
- Lugar donde se almacenan los datos
- Solo se guardan datos serializables
- Es inmutable (no puede ser cambiado o alterado)
- Solo hay uno por app
- para cambiar un state se utiliza dispatch que permite
ingresar un action
*/
import {browserHistory} from 'react-router'
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import 'history'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import reducers from '../reducers'

// Reducer
const reducer = combineReducers({
	...reducers,
	routing: routerReducer
})

// Store Redux tool
const createStoreWithMiddleware = compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const Store = createStoreWithMiddleware(reducer)

// Sync navigation with the store
const History = syncHistoryWithStore(browserHistory, Store)

// This is to implement analytics
//history.listen(location => analyticsService.track(location.pathname));

export const history = History
export const store = Store
