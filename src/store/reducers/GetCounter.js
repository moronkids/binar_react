import { USER_DATA } from "../../type"

const initialState = {
  counter: 0,
}

export default function (state = initialState, action) {
  const { type, payload } = action
//   console.log(type, payload, "test")
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        // ...payload,
        counter:  state.counter + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        // ...payload,
        counter: state.counter - 1,
      }
    default:
      return state
  }
}
