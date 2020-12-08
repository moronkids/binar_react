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
  const [todo, setTodo] = useState("") //pengganti setState
  const [todoEdit, setTodoEdit] = useState("") //pengganti setState
  const [arr, setArr] = useState([]) //pengganti setState
  const [index, setIndex] = useState(0) //pengganti setState
  const handleChange = (e, x = null) => {
    if (x != null) {
      const { name, value } = e.target
      setTodoEdit(value)
    } else {
      const { name, value } = e.target
      setTodo(value)
    }
  }

  const submit = (e = null) => {
    if (e !== null) {
      const change = [...arr]
      change[e]["name"] = todoEdit
      setArr(change)
    } else {
      setArr((prev) => [...arr, { name: todo, status: false }])
      setIndex(index + 1)
    }
  }
  const removeKey = async (e) => {
    if (e == "checked") {
      console.log(arr, "checked")
      const newTodos = await arr.filter((item, i) => item["checkbox"] !== true)
      console.log(newTodos)
      setArr(newTodos)
    } else {
      const newTodos = await arr.filter((item) => item !== arr[e])
      setArr(newTodos)
    }
  }
  const updateInput = (e, x = null) => {
    if (x !== null) {
      const change = [...arr]
      change[e]["edited"] = !change[e]["edited"]
      setArr(change)
      console.log(change)
    } else {
      const change = [...arr]
      change[e]["checkbox"] = !change[e]["checkbox"]
      setArr(change)
      console.log(change)
    }
  }
  useEffect(async () => {
    console.log("useeffect")
    if (arr.length <= 0) {
      console.log(JSON.stringify(dataJson), dataJson, "data")
      setArr(JSON.parse(JSON.stringify(dataJson)))
    }
  }, [])

  const status = (e) => {
    const change = [...arr]
    change[e]["status"] = !change[e]["status"]
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
