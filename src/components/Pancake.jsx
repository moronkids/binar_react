import React from "react"
import styled, { css } from "styled-components"
import Wrapper from "../components/Layout"
const Pancake = () => {
  const DivParent = styled.div`
    & {
      display: flex;
      flex-wrap: wrap;
    }
  `

  const DivChild = styled.div`
    & {
      flex: 0 1 300px;
      flex: 1 1 300px;
      border: 1px solid red;
      background: lightpink;
      font-size: 2rem;
      text-align: center;
    }
  `
  return (
    <Wrapper>
      <DivParent>
        <DivChild>1</DivChild>
        <DivChild>2</DivChild>
        <DivChild>3</DivChild>
      </DivParent>
    </Wrapper>
  )
}

export default Pancake
