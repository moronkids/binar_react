import React, { useContext } from "react"
import { overlayProvider } from "../Provider/OverlayProvider"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import styled from "styled-components"

const Wrapper = styled.div`
  & {
    min-height: calc(100vh - 33.57972544878564vh);
  }
`
const Home = (props) => {
  // const spinner = useContext(overlayProvider)
  // console.log(spinner, "test")
  // if (spinner) {
  //   localStorage.removeItem("spinner")
  // }

  return (
    // <Body>
    <div>
      <Link to="/challange1">01. Challange 1</Link>
      <br />
      <Link to="/challange2">02. Challange 2</Link>
      <br />
      <Link to="/challange3">03. Challange 3</Link>
      <br />
      <Link to="/challange4">04. Challange 4</Link>
    </div>
  )
}
export default Home
