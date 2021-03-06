import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Ram = () => {
  const Body = styled.div`
    & {
      display: grid;
      height: 100vh;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  `

  const Div = styled.div`
    & {
      display: grid;
      place-items: center;
      background: lightpink;
    }
  `
  return (
    <div>

      <Body>
        <Div>1</Div>
        <Div>2</Div>
        <Div>3</Div>
        <Div>4</Div>
      </Body>

    </div>
  )
}

export default Ram
