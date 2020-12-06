import React, { useState, useRef, useEffect } from "react"
import Wrapper from "../../components/Layout"
import axios from "../../axios"
import { db } from "../../firebase/FireBaseIndex"
import { dataJson } from "./Json"
import {
  TrashOutline,
  CheckOutline,
  XOutline,
  PencilOutline,
} from "@graywolfai/react-heroicons"
const Phase1 = () => {
  var firebase = require("firebase/app")
  require("firebase/auth")
  require("firebase/database")
  const [todo, setTodo] = useState("")
  const [arr, setArr] = useState(null)
  const [index, setIndex] = useState(0)
  const [todoEdit, setTodoEdit] = useState("") //pengganti setState
  const inputRef = useRef("tes")
  const handleChange = (e, x = null) => {
    if (x != null) {
      const { name, value } = e.target
      setTodoEdit(value)
      console.log(todoEdit)
    } else {
      const { name, value } = e.target
      setTodo(value)
    }
    // const { name, value } = e.target
    // setTodo(value)
    // console.log(inputRef)
  }

  const updateInput = (e, x = null) => {
    console.log(x, "isi")
    if (x !== null) {
      // const change = [...arr]
      // change[e]["edited"] = !change[e]["edited"]
      // setArr(change)
      // console.log(change)

      const change = [...arr]
      console.log(change[e])
      change[e]["edited"] = !change[e]["edited"]
      let userRef = db.ref("todolist/" + change[e][0]["id"])
      userRef.update({ status: change[e][1]["edited"] })
      setArr(change)
    } else {
      const change = [...arr]
      change[e][1]["checkbox"] = !change[e][1]["checkbox"]
      setArr(change)
      console.log(change)

      // const change = [...arr]
      // console.log(change[e])
      // change[e]["checkbox"] = !change[e]["checkbox"]
      // let userRef = db.ref("todolist/" + change[e][0]["id"])
      // userRef.update({ status: change[e][1]["checkbox"] })
      // setArr(change)
    }
  }
  useEffect(async () => {
    const result = await axios.get("/todolist.json")
    console.log(result, "axios")
    if (result.data !== null) {
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
  const handleRemove = async (x) => {
    console.log(x, x[1], "test")
    if (Array.isArray(x) && x[1] != undefined) {
      x.forEach(async (val, i, x) => {
        console.log(val, "array")
        let userRef = db.ref("todolist/" + val[0]["id"])
        await userRef.remove()
      })
    } else {
      let userRef = db.ref("todolist/" + x[0][0]["id"])
      userRef.remove()
    }
  }
  const submit = (e = null) => {
    if (e !== null) {
      const change = [...arr]
      console.log(todoEdit, change[e][1]["name"], "edit")
      change[e][1]["name"] = todoEdit
      let userRef = db.ref("todolist/" + change[e][0]["id"])
      userRef.update({ name: change[e][1]["name"] })
      setArr(change)
      // const change = [...arr]
      // change[e]["name"] = todoEdit
      // setArr(change)
    } else {
      let copy = JSON.parse(JSON.stringify(todo))
      setTodo("")
      // e.preventDefault()/
      // e.preventDefault()
      const todox = {
        name: copy,
        status: false,
        checkbox: false,
        edited: false,
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
      // setArr((prev) => [...arr, { name: todo, status: false }])
      // setIndex(index + 1)
    }
    // let copy = JSON.parse(JSON.stringify(todo))
    // setTodo("")
    // e.preventDefault()
    // const todox = {
    //   name: copy,
    //   status: false,
    // }
    // axios
    //   .post("/todolist.json", todox)
    //   .then((response) => {
    //     recall(todox)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     alert("error")
    //   })
  }
  const removeKey = async (e) => {
    if (e == "checked") {
      console.log(arr, e, "checked")
      const newTodos = await arr.filter((item, i) => item[1]["checkbox"] !== true)
      const arrID = await arr.filter((item, i) => item[1]["checkbox"] === true)

      console.log(newTodos)
      setArr(newTodos)
      handleRemove(arrID)
    } else {
      let userId = arr[e][0]["id"]
      const newTodos = arr.filter((item) => item !== arr[e])
      setArr(newTodos)
      handleRemove(userId)
      // const newTodos = await arr.filter((item) => item !== arr[e])
      // setArr(newTodos)
    }
    // console.log(arr, arr[x][0]["id"], e, "der")
    // let userId = arr[x][0]["id"]
    // const newTodos = arr.filter((item) => item !== arr[e])
    // setArr(newTodos)
    // handleRemove(userId)
  }

  const status = (e, x) => {
    let change = [...arr]
    console.log(arr, change[e][1]["status"], "0")
    change[e][1]["status"] = !change[e][1]["status"]
    let userRef = db.ref("todolist/" + change[e][0]["id"])
    userRef.update({ status: change[e][1]["status"] })
    console.log(arr, change[e][1]["status"], "1")
    setArr(change)
    console.log(arr, change[e][1]["status"], "2")
  }
  console.log(arr)
  return (
    <Wrapper>
      {" "}
      <div>
        <div className="h-100 w-full flex items-center justify-center bg-green-900-lightest font-sans outline-none">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="">Todo List</h1>
              <button
                onClick={() => removeKey("checked")}
                name="button"
                className="focus:outline-none flex-no-shrink p-2 mt-2 border-2 rounded text-red-400 border-red hover:text-white hover:bg-red-400"
              >
                Delete
              </button>
              <div className="flex mt-4">
                <input
                  name="todoText"
                  onChange={(e) => {
                    handleChange(e)
                  }}
                  placeholder="Todo Text"
                  value={todo}
                  className="focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo"
                />
                <button
                  onClick={() => submit()}
                  name="button"
                  className="focus:outline-none flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-green-900"
                >
                  Add
                </button>
              </div>
            </div>

            <div>
              {arr !== null
                ? Object.keys(arr).map((keyName, i) => (
                    <>
                      {console.log(keyName, i, "map")}
                      <div
                        key={arr[keyName][1]["name"] + "_" + i}
                        className="flex mb-4 items-center"
                      >
                        <input
                          key={arr[keyName][1]["name"] + "_" + i}
                          onClick={() => updateInput(i)}
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-pink-600"
                          defaultChecked={arr[keyName][1]["checkbox"]}
                        />
                        <span class="ml-2 text-gray-700"></span>

                        {arr[keyName][1]["status"] ? (
                          <p
                            onClick={() => updateInput(i, "edit")}
                            className="cursor-pointer w-full line-through text-green-400 "
                          >
                            {arr[keyName][1]["name"]}
                          </p>
                        ) : (
                          <p
                            onClick={() => updateInput(i, "edit")}
                            className="cursor-pointer w-full text-grey-darkest"
                          >
                            {arr[keyName][1]["name"]}
                          </p>
                        )}

                        <button
                          onClick={() => status(i)}
                          className="focus:outline-none flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green hover:bg-green-400"
                        >
                          {/* {arr[keyName]["status"] ? "Done" : "unDone"} */}
                          {arr[keyName][1]["status"] ? (
                            <CheckOutline className="w-6 "></CheckOutline>
                          ) : (
                            <XOutline className="w-6 "></XOutline>
                          )}
                          {/* <CheckOutline className="w-6"></CheckOutline> */}
                        </button>
                        <button
                          onClick={() => removeKey(i)}
                          className="focus:outline-none flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red hover:text-white hover:bg-red-400"
                        >
                          <TrashOutline className="w-6"></TrashOutline>
                        </button>
                      </div>
                      {arr[keyName]["edited"] ? (
                        <div className="mb-3 flex transition ease-in-out duration-700">
                          <label class="inline-block w-full">
                            <span class="text-gray-700">Edit : </span>
                            <textarea
                              name="todoText"
                              onChange={(e) => {
                                handleChange(e, "edited")
                              }}
                              placeholder="Todo Text"
                              // value={todo}
                              className="form-textarea focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                              rows="3"
                              placeholder="Enter some long form content."
                            >
                              {arr[keyName][1]["name"]}
                            </textarea>
                          </label>

                          <span className="mt-3 flex ">
                            <button
                              onClick={() => {
                                submit(keyName), updateInput(i, "edit")
                              }}
                              className="animate-bounce focus:outline-none flex-no-shrink my-auto p-2 ml-2 border-2 rounded text-red-400 border-red hover:text-white hover:bg-red-400"
                            >
                              <PencilOutline className="w-6"></PencilOutline>
                            </button>
                          </span>
                        </div>
                      ) : null}
                    </>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Phase1
