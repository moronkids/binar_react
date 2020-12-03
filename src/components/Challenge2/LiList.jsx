import React from "react"
import Navbar from "../../components/Navbar"
const LiList = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 container content-center">
        <ul>
          <li>1. React</li>
          <li>2. React Hooks</li>
          <li>3. React Context</li>
        </ul>
        <ul>
          <li>4. React Redux</li>
          <li>5. React Redux Saga</li>
          <li>6. React Router</li>
        </ul>
        <ul>
          <li>7. React Tailwind</li>
          <li>8. React Styled Components</li>
          <li>9. React Router Dom</li>
        </ul>
      </div>
    </div>
  )
}

export default LiList
