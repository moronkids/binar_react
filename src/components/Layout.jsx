import React from "react"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import Footer from "../components/Footer"
const Layout = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
