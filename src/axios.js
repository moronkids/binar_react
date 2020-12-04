import axios from "axios"

const instance = axios.create({
  baseURL: "https://todolist-f9f5a.firebaseio.com/",
})
export default instance
