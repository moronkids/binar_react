import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const SpanGrid = () => {
  const Body = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(12, 1fr);
    font-family: system-ui, sans-serif;
  `

  const DivSpan12 = styled.div`
    & {
      background: lightpink;
      grid-column: 1 / 13;
    }
  `
  const DivSpan6 = styled.div`
    & {
      background: lightblue;
      grid-column: 1 / 7;
    }
  `
  const DivSpan4 = styled.div`
    & {
      background: coral;
      grid-column: 4 / 9;
    }
  `
  const DivSpan2 = styled.div`
    & {
      background: yellow;
      grid-column: 3 / 5;
    }
  `
  return (
    <React.Fragment>

      <Body>
        {/**bukan body element html, tapi ini sekedar penamaan component */}
        <DivSpan12>Span 12</DivSpan12>
        <DivSpan6>Span 6</DivSpan6>
        <DivSpan4>Span 4</DivSpan4>
        <DivSpan2>Span 2</DivSpan2>
      </Body>
   
    </React.Fragment>
  )
}

export default SpanGrid
