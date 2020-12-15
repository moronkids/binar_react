import { USER_DATA } from "../../type"

const initialState = {
  allUser: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action
    switch (type) {
      case USER_DATA:
        return {
          ...state,
          ...payload,
          allUser: payload,
        }
      default:
        return state
    }
}
