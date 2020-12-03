import React, { useState } from "react"
import Navbar from "../../components/Navbar"
const Phase1 = () => {
  const [todo, setTodo] = useState("")
  const [arr, setArr] = useState([])
  const [index, setIndex] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value, todo)
    // // console.log(todo)
    setTodo(value)
  }
  const submit = () => {
    setArr((prev) => [...arr, { name: todo, status: false }])
    //   setArr([...arr, todo])
    console.log(arr)
    setIndex(index + 1)
  }
  const removeKey = (e) => {
    console.log(arr, e)
    const newTodos = arr.filter((item) => item !== arr[e])
    console.log(newTodos)
    setArr(newTodos)
  }

  const status = (e) => {
    const change = [...arr]
    console.log(change[e])
    change[e]["status"] = !change[e]["status"]
    setArr(change)
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
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
                onClick={() => submit()}
                name="button"
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
              >
                Add
              </button>
            </div>
          </div>

          <div>
            {Object.keys(arr).map((keyName, i) => (
              <div id={keyName} className="flex mb-4 items-center">
                {arr[keyName]["status"] ? (
                  <p className="w-full line-through text-green ">
                    {arr[keyName]["name"]}
                  </p>
                ) : (
                  <p className="w-full text-grey-darkest">{arr[keyName]["name"]}</p>
                )}

                <button
                  onClick={() => status(i)}
                  className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
                >
                  {arr[keyName]["status"] ? "Done" : "unDone"}
                </button>
                <button
                  onClick={() => removeKey(i)}
                  className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* <div className="flex mb-4 items-center">
              <p className="w-full line-through text-green">
                Submit Todo App Component to Tailwind Components
              </p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
                Not Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                Remove
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Phase1
