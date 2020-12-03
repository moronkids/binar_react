import React, { Fragment } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const HolyGrail = () => {
  const Body = styled.body`
    & {
      display: grid;
      height: 100vh;
      grid-template: auto 1fr auto / auto 1fr auto;
      font-family: system-ui, sans-serif;
    }
  `

  const Header = styled.header`
    & {
      background: lightpink;
      padding: 2rem;
      grid-column: 1 / 4;
    }
  `

  const LeftSidebar = styled.div`
    & {
      background: lightblue;
      grid-column: 1 / 2;
      padding: 1rem;
    }
  `

  const Main = styled.main`
    & {
      background: coral;
      grid-column: 2 / 3;
    }
  `

  const RightSidebar = styled.div`
    & {
      background: yellow;
      grid-column: 3 / 4;
      padding: 1rem;
    }
  `

  const Footer = styled.footer`
    & {
      background: wheat;
      padding: 2rem;
      text-align: center;
      grid-column: 1 / 4;
    }
  `

  return (
    <Fragment>
      <Navbar></Navbar>
      <Body>
        <Header>
          <h1>Header.com</h1>
        </Header>
        <LeftSidebar>Left Sidebar</LeftSidebar>
        <Main></Main>
        <RightSidebar></RightSidebar>
        <Footer>Footer Content — Header.com 2020</Footer>
      </Body>
      <Footer></Footer>
    </Fragment>
  )
}

export default HolyGrail
