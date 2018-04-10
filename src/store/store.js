import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware  from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { logger } from 'redux-logger'

import { combineReducers } from 'redux'
import { statefullReducer } from './../app/Containers/Statefull/reducer'
import { homePageReducer } from './../app/Containers/HomePage/reducer'
import { showsPageReducer } from './../app/Containers/ShowsPage/reducer'

const rootReducer = combineReducers({
	statefullReducer,
	home: homePageReducer,
	shows: showsPageReducer,
})
export { rootReducer }

export const store = applyMiddleware(logger, promise(), thunkMiddleware)(createStore)