import React from "react"
import { Link } from "react-router-dom"
import LiList from "../components/Challenge2/LiList"
import Wrapper from "../components/Layout"

const Challenge2 = () => {
  return (
    <div>
      <Wrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 container content-center">
          <Link to="/challenge2/1">01. List using UL</Link>
          <br />
          <Link to="/challenge2/2">02. Functional Components</Link>
          <br />
          <Link to="/challenge2/3">03. Child Components Practice</Link>
          <br />
        </div>
      </Wrapper>
    </div>
  )
}

export default Challenge2
