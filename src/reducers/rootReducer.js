import {combineReducers} from 'redux'
import personReducer from './personReducer'
import countReducer from './CountReducer'


const rootReducer = combineReducers({
    people: personReducer,
    counter: countReducer,
})

export default rootReducer