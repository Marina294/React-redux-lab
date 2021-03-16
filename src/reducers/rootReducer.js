import {combineReducers} from 'redux'
import personReducer from './personReducer'
import countReducer from './CountReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
    people: personReducer,
    counter: countReducer,
    postsObj: postReducer 
})

export default rootReducer