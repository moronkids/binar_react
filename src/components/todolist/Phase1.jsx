import React, { useState, useRef, useEffect } from "react"
import Wrapper from "../../components/Layout"
import axios from "../../axios"
import { db } from "../../firebase/FireBaseIndex"

const Phase1 = () => {
  var firebase = require("firebase/app")
  require("firebase/auth")
  require("firebase/database")
  const [todo, setTodo] = useState("")
  const [arr, setArr] = useState([[{ id: 1 }, { name: "sulis", status: true }]])
  const [index, setIndex] = useState(0)
  const inputRef = useRef("tes")
  const handleChange = (e) => {
    const { name, value } = e.target
    setTodo(value)
    console.log(inputRef)
  }

  useEffect(async () => {
    const result = await axios.get("/todolist.json")
    if (arr.length > 0) {
      var arrx = await Object.keys(result.data).map((key) => [
        { id: key },
        result.data[key],
      ])
      setArr(arrx)
    }
  }, [])

  const recall = async (e) => {
    const result = await axios.get("/todolist.json")
    var arrx = Object.keys(result.data).map((key) => [{ id: key }, result.data[key]])
    setArr(arrx)
  }
  const handleRemove = (x) => {
    let userRef = db.ref("todolist/" + x)
    userRef.remove()
  }
  const submit = (e) => {
    let copy = JSON.parse(JSON.stringify(todo))
    setTodo("")
    e.preventDefault()
    const todox = {
      name: copy,
      status: false,
    }
    axios
      .post("/todolist.json", todox)
      .then((response) => {
        recall(todox)
      })
      .catch((error) => {
        console.log(error)
        alert("error")
      })
  }
  const removeKey = (e, x) => {
    console.log(arr, arr[x][0]["id"], e, "der")
    let userId = arr[x][0]["id"]
    const newTodos = arr.filter((item) => item !== arr[e])
    setArr(newTodos)
    handleRemove(userId)
  }

  const status = (e, x) => {
    const change = [...arr]
    console.log(change[e])
    change[e][1]["status"] = !change[e][1]["status"]
    let userRef = db.ref("todolist/" + change[e][0]["id"])
    userRef.update({ status: change[e][1]["status"] })
    setArr(change)
  }
  console.log(arr)
  return (
    <div>
      <Wrapper>
        <div className="h-100 w-full flex items-center justify-center bg-green-900-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="">Todo List</h1>
              <div className="flex mt-4">
                <input
                  name="todoText"
                  onChange={(e) => {
                    handleChange(e)
                  }}
                  placeholder="Todo Text"
                  value={todo}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo"
                />
                <button
                  onClick={(e) => submit(e)}
                  name="button"
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-green-900"
                >
                  Add
                </button>
              </div>
            </div>

            <div>
              {/* {console.log(arr, "asuuu")} */}
              {arr.length > 0
                ? Object.keys(arr).map((keyName, i) => (
                    <div id={keyName} className="flex mb-4 items-center">
                      {console.log(arr[i][1]["status"], "test")}
                      {arr[i][1]["status"] ? (
                        <p className="w-full line-through text-green-400 ">
                          {arr[i][1]["name"]}
                        </p>
                      ) : (
                        <p className="w-full text-grey-darkest">
                          {arr[i][1]["name"]}
                        </p>
                      )}

                      <button
                        onClick={() => status(i)}
                        className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green hover:bg-green-400"
                      >
                        {arr[i][1]["status"] ? "Done" : "unDone"}
                      </button>
                      <button
                        onClick={() => removeKey(keyName, i)}
                        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red hover:text-white hover:bg-red-400"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Phase1
