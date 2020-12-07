import React, { Fragment } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Respect = () => {
  const Body = styled.div`
    & {
      display: grid;
      place-items: center;
      height: 100vh;
    }
  `

  const Visual = styled.div`
    & {
      aspect-ratio: 16/9;
      background: wheat;
      margin: 0.5rem 0;
    }
  `
  const Card = styled.div`
    & {
      width: 80%;
      display: flex;
      flex-direction: column;
      background: lightpink;
      padding: 1rem;
    }
  `
  const H1 = styled.h1`
    & {
      font-size: 1.5rem;
    }
  `
  return (
    <Fragment>

      <Body>
        <Card>
          <H1>Title Here</H1>
          <Visual></Visual>
          <p>
            Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sed est error repellat veritatis.
          </p>
        </Card>
      </Body>

    </Fragment>
  )
}

export default Respect
