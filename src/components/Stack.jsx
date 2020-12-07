import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Stack = () => {
  const Body = styled.body`
    & {
      display: grid;
      font-family: system-ui, sans-serif;
      height: 100vh;
      grid-template-rows: auto 1fr auto;
    }
  `

  const Header = styled.header`
    & {
      background: lightpink;
      padding: 2rem;
    }
  `

  const Main = styled.main`
    & {
      background: coral;
    }
  `

  const Footer = styled.footer`
    & {
      background: wheat;
      padding: 2rem;
      text-align: center;
    }
  `
  return (
    <>

      <Body>
        <Header>
          <h1>Header.com</h1>
        </Header>
        <Main></Main>
        <Footer>Footer Content — Header.com 2020</Footer>
      </Body>

    </>
  )
}

export default Stack
