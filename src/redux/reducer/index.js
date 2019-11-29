import { combineReducers } from "redux"
import { countreducer } from "./countreducer"

export default combineReducers({
    count: countreducer
})