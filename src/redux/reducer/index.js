import { combineReducers } from 'redux';
import countreducer from './countreducer'
import authreducer from './authreducer.js'

export default combineReducers({
    count: countreducer,
    user: authreducer
})