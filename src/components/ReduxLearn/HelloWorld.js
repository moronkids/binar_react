import React from "react"
import './Hw.css'
import Img from '../../assets/icon-redux.svg'
const HelloWorld = ({ tech }) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <img src={Img} width="500" height="500"></img>
      </div>
      <div className="text-center container justify-center">
        <h1 className="text-gray-500">
          Hello World <span className="hello-world__tech">{tech}!</span>
        </h1>
      </div>
    </>
  )
}

export default HelloWorld
