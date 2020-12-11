import React, { useContext } from "react"
import { overlayProvider } from "../Provider/OverlayProvider"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import styled from "styled-components"

const Wrapper = styled.div`
  & {
    min-height: calc(100vh - 33.57972544878564vh);
  }
`
const Home = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <Wrapper
        className="leading-relaxed max-w-7xl mx-auto px-4 sm:px-6 container content-center text-gray-600 text-justify
      "
      >
        {props.children}
      </Wrapper>
      <Footer></Footer>
    </div>
  )
}
export default Home
