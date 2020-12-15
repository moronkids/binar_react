import axios from "axios"
import { USER_DATA } from "../../type"

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
