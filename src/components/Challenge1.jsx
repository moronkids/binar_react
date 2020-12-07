import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Challenge1 = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 container content-center">
        <Link to="/1">01. Super Centered</Link>
        <br />
        <Link to="/2">02. The Deconstructed Pancake</Link>
        <br />
        <Link to="/3">03. Sidebar Says</Link>
        <br />
        <Link to="/4">04. Pancake Stack</Link>
        <br />
        <Link to="/5">05. Classic Holy Grail Layout</Link>
        <br />
        <Link to="/6">06. 12-Span Grid</Link>
        <br />
        <Link to="/7">07. RAM (Repeat, Auto, Minmax)</Link>
        <br />
        <Link to="/8">08. Line Up</Link>
        <br />
        <Link to="/9">09. Clamping My Style</Link>
        <br />
        <Link to="/10">10. Respect for Aspect</Link>
      </div>
    </div>
  )
}

export default Challenge1
