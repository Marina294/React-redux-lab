import {combineReducers} from 'redux'

import personReducer from './personReducer'

const rootReducer = combineReducers({
    people: personReducer
})

export default rootReducer