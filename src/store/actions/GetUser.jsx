import axios from "axios"
import { USER_DATA, COUNTER_DATA } from "../../type"

export const getUserData = (e) => async (dispatch) => {
  console.log("masuk")
  try {
    dispatch({
      type: USER_DATA,
      payload: e,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getCounter = (e) => async (dispatch) => {
  console.log("masuk counter")
  try {
    dispatch({
      type: COUNTER_DATAX,
      payload: e,
    })
  } catch (error) {
    console.log(error)
  }
}
