import React from "react"
import { Link } from "react-router-dom"
import LiList from "./Challenge2/LiList"
import Wrapper from "./Layout"

const Challenge2 = () => {
  return (
    <div>
      <Wrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 container content-center">
          <Link to="/challenge3/1">01. Phase 1</Link>
          <br />
          <Link to="/challenge2/2">02. Phase 2</Link>
          <br />
        </div>
      </Wrapper>
    </div>
  )
}

export default Challenge2
