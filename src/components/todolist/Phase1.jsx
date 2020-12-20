import React, { useState, useRef, useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import {
  GET_TODOS_REQUESTED,
  DELETE_TODO_REQUESTED,
  SET_TODO_TITLE_REQUESTED,
  CREATE_TODO_REQUESTED,
} from "../../redux/actions/todo-action"
import Wrapper from "../../components/Layout"
import axios from "../../axios"
import { db } from "../../firebase/FireBaseIndex"
import {
  TrashOutline,
  CheckOutline,
  XOutline,
  PencilOutline,
} from "@graywolfai/react-heroicons"
const Phase1 = ({ todos, getTodos, deleteTodo, createTodo }) => {
  // console.log(props)
  var firebase = require("firebase/app")
  require("firebase/auth")
  require("firebase/database")
  const [todo, setTodo] = useState("")
  const [arr, setArr] = useState(null)
  const [todoEdit, setTodoEdit] = useState("") //pengganti setState

  const handleChange = (e, x = null) => {
    if (x != null) {
      const { name, value } = e.target
      setTodoEdit(value)
    } else {
      const { name, value } = e.target
      setTodo(value)
    }
  }

  const updateInput = (e, x = null) => {
    if (x !== null) {
      const change = [...arr]

      change[e]["edited"] = !change[e]["edited"]
      let userRef = db.ref("todolist/" + change[e][0]["id"])
      userRef.update({ status: change[e][1]["edited"] })
      setArr(change)
    } else {
      const change = [...arr]
      change[e][1].checkbox = !change[e][1].checkbox
      setArr(change)
    }
  }
  useEffect(async () => {
    getTodos()
    // const result = await axios.get("/todolist.json")
    // if (result.data !== null) {
    //   var arrx = await Object.keys(result.data).map((key) => [
    //     { id: key },
    //     result.data[key],
    //   ])
    //   setArr(arrx)
    // }
  }, [])

  const recall = async (e) => {
    const result = await axios.get("/todolist.json")
    var arrx = Object.keys(result.data).map((key) => [{ id: key }, result.data[key]])
    setArr(arrx)
  }
  const handleRemove = async (x) => {
    deleteTodo(x)
    // if (Array.isArray(x) && x[1] != undefined) {
    //   x.forEach(async (val, i, x) => {
    //     let userRef = db.ref("todolist/" + val[0]["id"])
    //     await userRef.remove()
    //   })
    // } else {
    //   if (x[0][0]["id"] == undefined) {
    //     deleteTodo(x)
    //     // let userRef = db.ref("todolist/" + x)
    //     // userRef.remove()
    //   } else {
    //     deleteTodo(x[0][0]["id"])
    //     // let userRef = db.ref("todolist/" + x[0][0]["id"])
    //     // userRef.remove()
    //   }
  }

  const submit = (e = null) => {
    let copy = JSON.parse(JSON.stringify(todo))
    //   setTodo("")
    const todox = {
      name: copy,
      status: false,
      checkbox: false,
      edited: false,
    }
    createTodo(todox)
    // if (e !== null) {
    //   const change = [...arr]
    //   change[e][1].name = todoEdit
    //   let userRef = db.ref("todolist/" + change[e][0]["id"])
    //   userRef.update({ name: change[e][1].name })
    //   setArr(change)
    // } else {
    //   let copy = JSON.parse(JSON.stringify(todo))
    //   setTodo("")
    //   const todox = {
    //     name: copy,
    //     status: false,
    //     checkbox: false,
    //     edited: false,
    //   }
    //   axios
    //     .post("/todolist.json", todox)
    //     .then((response) => {
    //       recall(todox)
    //     })
    //     .catch((error) => {
    //       alert("error")
    //     })
    // }
  }
  const removeKey = async (e) => {
    if (e == "checked") {
      // const newTodos = await arr.filter((item, i) => item[1].checkbox !== true)
      const arrID = await arr.filter((item, i) => item[1].checkbox === true)
      // setArr(newTodos)
      handleRemove(arrID)
    } else {
      // console.log(e, todos.todos[e], "test")
      // const newTodos = arr.filter((item) => item !== arr[e])
      // setArr(newTodos)
      handleRemove(e)
    }
  }

  const status = (e, x) => {
    let change = [...arr]

    change[e][1].status = !change[e][1].status
    let userRef = db.ref("todolist/" + change[e][0]["id"])
    userRef.update({ status: change[e][1].status })

    setArr(change)
  }
  console.log(todos, "todo component")
  return (
    <Wrapper>
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
              {todos.todos != null
                ? Object.keys(todos.todos).map((keyName, i) => (
                    <>
                      {console.log(keyName, i, todos.todos[keyName][i], "map")}
                      <div
                        key={todos.todos[keyName]["name"] + "_" + i}
                        className="flex mb-4 items-center"
                      >
                        <input
                          key={todos.todos[keyName].name + "_" + i}
                          onClick={() => updateInput(i)}
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-pink-600"
                          defaultChecked={todos.todos[keyName].checkbox}
                        />
                        <span class="ml-2 text-gray-700"></span>
                        {todos.todos[keyName].status ? (
                          <p
                            onClick={() => updateInput(i, "edit")}
                            className="cursor-pointer w-full line-through text-green-400 "
                          >
                            {todos.todos[keyName].name}
                          </p>
                        ) : (
                          <p
                            onClick={() => updateInput(i, "edit")}
                            className="cursor-pointer w-full text-grey-darkest"
                          >
                            {todos.todos[keyName].name}
                          </p>
                        )}
                        <button
                          onClick={() => status(i)}
                          className="focus:outline-none flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green hover:bg-green-400"
                        >
                          {/* {arr[keyName].status ? "Done" : "unDone"} */}
                          {todos.todos[keyName].status ? (
                            <CheckOutline className="w-6 "></CheckOutline>
                          ) : (
                            <XOutline className="w-6 "></XOutline>
                          )}
                          {/* <CheckOutline className="w-6"></CheckOutline> */}
                        </button>
                        <button
                          onClick={() => removeKey(keyName)}
                          className="focus:outline-none flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red hover:text-white hover:bg-red-400"
                        >
                          <TrashOutline className="w-6"></TrashOutline>
                        </button>
                      </div>
                      {todos.todos[keyName]["edited"] ? (
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
                              {todos.todos[keyName].name}
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
Phase1.propTypes = {
  loading: PropTypes.bool,
  todos: PropTypes.array,
  getTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => {
  return {
    todos: state.todo,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch({ type: GET_TODOS_REQUESTED }),
  deleteTodo: (id) => dispatch({ type: DELETE_TODO_REQUESTED, payload: id }),
  createTodo: (title) => dispatch({ type: CREATE_TODO_REQUESTED, payload: title }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Phase1)
