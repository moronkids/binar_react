import React from "react"
import styled from "styled-components"
const Wrapper = styled.div`
  & {
    min-height: calc(100vh - 33.57972544878564vh);
  }
`
const Main = (props) => {
  return (
    <Wrapper className="max-w-7xl mx-auto px-4 sm:px-6 container content-center">
      {props.children}
    </Wrapper>
  )
}

export default Main
