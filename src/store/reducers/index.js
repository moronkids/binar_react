import { combineReducers } from "redux"

// Import file reducer
import GetDataReducer from "./GetUserReducers"
import GetCounterReducer from "./GetCounter"

export default combineReducers({
  getDataUserAll: GetDataReducer,
  getCounterAll: GetCounterReducer,
})
