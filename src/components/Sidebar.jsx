import React, { Fragment } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
const Sidebar = () => {
  const DivSidebar = styled.div`
    & {
      height: 100vh;
      background: lightpink;
      font-size: 2rem;
      text-align: center;
    }
  `
  const Body = styled.body`
    & {
      display: grid;
      grid-template-columns: minmax(150px, 25%) 1fr;
      padding: 0;
      margin: 0;
    }
  `
  const PContent = styled.p`
    & {
      padding: 2rem;
    }
  `
  return (
    <Fragment>
      <Navbar></Navbar>
      <Body>
        <DivSidebar>
          Min: 150px
          <br />
          Max: 25%
        </DivSidebar>
        <PContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla
          architecto maxime modi nisi. Quas saepe dolorum, architecto quia fugit
          nulla! Natus, iure eveniet ex iusto tempora animi quibusdam porro?
        </PContent>
      </Body>
    </Fragment>
  )
}

export default Sidebar
