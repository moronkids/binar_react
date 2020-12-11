import React from "react"
import { Link } from "react-router-dom"
import LiList from "./Challenge2/LiList"
import Navbar from "./Navbar"
import Footer from "./Footer"
const Challenge2 = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 container content-center">
        <Link to="/challenge4/1">01. All (manual filter)</Link>
        <br />
        <Link to="/challenge4/2">02. Turkey</Link>
        <br />
        <Link to="/challenge4/3">03. German</Link>
        <br />
        <Link to="/challenge4/4">04. Random</Link>
        <br />
      </div>
    </div>
  )
}

export default Challenge2
