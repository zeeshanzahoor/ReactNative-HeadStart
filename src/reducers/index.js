import { combineReducers } from 'redux'
import userStore from './userStore'

export default combineReducers({
    user: userStore,
})