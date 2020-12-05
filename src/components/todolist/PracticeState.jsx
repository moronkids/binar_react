// import React, { Component } from "react"
// import Wrapper from "../../components/Layout"
// class PracticeState extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isLogged: true,
//     }

//   }

//   handleClick(e) {
//     alert("masuk")
//     this.setState({
//       isLogged: !this.state.isLogged,
//     })
//   }
//   render() {
//     return (
//       <Wrapper>
//         <h1>is Logged {this.state.isLogged ? "in" : "out"}</h1>
//         <button onClick={(e) => this.handleClick(e)}>click</button>
//       </Wrapper>
//     )
//   }
// }

// export default PracticeState
import React, { useState } from "react" // import useState
import Wrapper from "../../components/Layout" //import wrapper layout
const PracticeState = () => {
  // ini nama function
  const [isLogged, setIsLogged] = useState(true) // define state
  const handleClick = (e) => {
    //triger onclick
    setIsLogged(!isLogged) // change state this.bind
  }
  return (
    <Wrapper>
      <h1>is Logged {isLogged ? "in" : "out"}</h1>
      <button onClick={(e) => handleClick(e)}>click</button>
    </Wrapper>
  )
}

export default PracticeState
