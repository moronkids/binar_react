// add useContext
import React, { useContext, useState, useEffect } from "react"
import { firebaseAuth } from "../Provider/AuthProvider"
import LoadingOverlay from "react-loading-overlay"
import styled, { css } from "styled-components"
import { useHistory, Link } from "react-router-dom"
import { overlayProvider } from "../Provider/OverlayProvider"

const Signin = (props) => {
  const history = useHistory()
  const [loaded, setLoaded] = useState(true) //masih aktif
  const spinner = useContext(overlayProvider)
  const { handleSignin, inputs, setInputs, errors, token } = useContext(firebaseAuth)
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSignin()
  }
  console.log(token, "TOKEN")
  // useEffect(() => {
  console.log("masuk")
  if ("token" in localStorage) {
    console.log("masuk2")

    history.push("/")
  }
  // }, [])
  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <LoadingOverlay
        active={!loaded}
        spinner={!loaded}
        text="Loading your content..."
      >
        <form onSubmit={handleSubmit}>
          <div className="w-screen h-screen flex">
            <div className="bg-white shadow-md rounded px-8 pt-6 m-auto w-3/4 md:w-1/4">
              {/* {errors.length > 0 ? errors.map(error => <p style={{ color: 'red' }}>{error}</p>) : null} */}
              {errors.length > 0 ? (
                <p style={{ color: "red" }}>{errors[errors.length - 1]}</p>
              ) : null}
              {/* {errors.length > 0 ? errors.map(error => <p style={{ color: 'red' }}>{error}</p>) : null} */}
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  onChange={handleChange}
                  name="email"
                  placeholder="email"
                  value={inputs.email}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="username"
                  type="text"
                  placeholder="Username"
                />

                <div className="mb-6">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    name="password"
                    placeholder="password"
                    value={inputs.password}
                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-red text-xs italic">
                    Please choose a password.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setLoaded(!loaded)}
                    type="submit"
                    className="m-1 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Sign in
                  </button>
                  <button className="m-1 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <Link to="/">
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      As a Guest
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </LoadingOverlay>
      {/* <DarkBackground disappear={loaded}>
            </DarkBackground> */}
    </div>
  )
}

export default Signin
