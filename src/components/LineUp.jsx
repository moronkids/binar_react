import React from "react"
import styled from "styled-components"
const LineUp = () => {
  const Body = styled.body`
    & {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(3, 1fr);
      font-family: system-ui, sans-serif;
    }
  `

  const Visual = styled.div`
    & {
      height: 100px;
      width: 100%;
      background: wheat;
      margin: 0.5rem 0;
    }
  `

  const Card = styled.div`
    & {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
    <Body>
      <Card>
        <H1>Title - Card 1</H1>
        <p>Medium length description. Let's add a few more words here.</p>
        <Visual></Visual>
      </Card>
      <Card>
        <H1>Title - Card 2</H1>
        <p>Medium length description. Let's add a few more words here.</p>
        <Visual></Visual>
      </Card>
      <Card>
        <H1>Title - Card 3</H1>
        <p>Medium length description. Let's add a few more words here.</p>
        <Visual></Visual>
      </Card>
    </Body>
  )
}

export default LineUp
