import { combineReducers } from "redux"

// Import file reducer
import GetDataReducer from "./GetUserReducers"

export default combineReducers({
  getDataUserAll: GetDataReducer,
})
