import React, { useState, useEffect } from "react"
import Wrapper from "../../components/Home"
import { dataJson } from "./Json"
import {
  TrashOutline,
  CheckOutline,
  XOutline,
  PencilOutline,
} from "@graywolfai/react-heroicons"
const Phase1 = () => {
  const [todo, setTodo] = useState("") //pengganti setState -> khusus buat todo list baru/ new
  const [todoEdit, setTodoEdit] = useState("") //pengganti setState -> khusus buat todo list waktu nampung/ edit
  const [arr, setArr] = useState([]) //pengganti setState
  const handleChange = (e, x = null) => {
    if (x != null) {
      const { name, value } = e.target
      setTodoEdit(value)
    } else {
      const { name, value } = e.target
      setTodo(value)
    }
  }

  const submit = async (e = null) => {
    if (e !== null) {
      const change = [...arr]
      change[e]["name"] = todoEdit
      await localStorage.setItem("json", JSON.stringify(change))
      setArr(change)
    } else {
      const data = [...arr, { name: todo, status: false }]
      console.log(data, "debug")
      await localStorage.setItem("json", JSON.stringify(data))
      // setArr(JSON.parse(JSON.stringify(dataJson)))
      setArr(data)
      // setIndex(index + 1)
    }
  }
  const removeKey = async (e) => {
    if (e == "checked") {
      console.log(arr, "checked")
      const newTodos = await arr.filter((item, i) => item["checkbox"] !== true)
      await localStorage.setItem("json", JSON.stringify(newTodos))
      console.log(newTodos)
      setArr(newTodos)
    } else {
      const newTodos = await arr.filter((item) => item !== arr[e])
      await localStorage.setItem("json", JSON.stringify(newTodos))
      setArr(newTodos)
    }
  }
  const updateInput = async (e, x = null) => {
    if (x !== null) {
      const change = [...arr]
      change[e]["edited"] = !change[e]["edited"]
      await localStorage.setItem("json", JSON.stringify(change))
      setArr(change)
      console.log(change)
    } else {
      const change = [...arr]
      change[e]["checkbox"] = !change[e]["checkbox"]
      await localStorage.setItem("json", JSON.stringify(change))
      setArr(change)
      console.log(change)
    }
  }
  useEffect(async () => {
    console.log("useeffect")
    if ("json" in localStorage) {
      setArr(JSON.parse(localStorage.getItem("json")))
    } else if (arr.length <= 0) {
      console.log(JSON.stringify(dataJson), dataJson, "data")
      await localStorage.setItem("json", JSON.stringify(dataJson))
      setArr(JSON.parse(localStorage.getItem("json")))
    }
  }, [])

  const status = async (e) => {
    const change = [...arr]
    change[e]["status"] = !change[e]["status"]
    await localStorage.setItem("json", JSON.stringify(change))
    setArr(change)
  }
  return (
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
            {Object.keys(arr).map((keyName, i) => (
              <div>
                <div
                  key={arr[keyName]["name"] + "_" + i}
                  // key={i}
                  className="flex mb-4 items-center"
                >
                  <input
                    key={arr[keyName]["name"] + "_" + i}
                    onClick={() => updateInput(i)}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-pink-600"
                    defaultChecked={arr[keyName]["checkbox"]}
                  />
                  <span class="ml-2 text-gray-700"></span>

                  {arr[keyName]["status"] ? (
                    <p
                      onClick={() => updateInput(i, "edit")}
                      className="cursor-pointer w-full line-through text-green-400 "
                    >
                      {arr[keyName]["name"]}
                    </p>
                  ) : (
                    <p
                      onClick={() => updateInput(i, "edit")}
                      className="cursor-pointer w-full text-grey-darkest"
                    >
                      {arr[keyName]["name"]}
                    </p>
                  )}

                  <button
                    onClick={() => status(i)}
                    className="focus:outline-none flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green hover:bg-green-400"
                  >
                    {/* {arr[keyName]["status"] ? "Done" : "unDone"} */}
                    {arr[keyName]["status"] ? (
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
                        {arr[keyName]["name"]}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Phase1
