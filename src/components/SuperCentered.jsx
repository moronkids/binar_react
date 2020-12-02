import React from "react"
import styled, { css } from "styled-components"

const SuperCentered = () => {
  const DivParent = styled.div`
    & {
      display: grid;
      place-items: center;

      background: lightblue;
      width: 500px;
      height: 500px;

      resize: both;
      overflow: auto;
    }
  `
  const DivChild = styled.div`
    & {
      padding: 0.5rem;
      border-radius: 10px;
      border: 1px solid red;
      background: lightpink;
      font-size: 2rem;
      text-align: center;
    }
  `
  return (
    <div>
      <DivParent>
        <DivChild>:)</DivChild>
      </DivParent>
    </div>
  )
}

export default SuperCentered
