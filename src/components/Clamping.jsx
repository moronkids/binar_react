import React, { Fragment } from "react"
import styles from "../assets/clamping.module.css"
import Wrapper from "../components/Layout"

const Clamping = () => {
  return (
    <Fragment>
      <Wrapper>
        <div className={styles.body}>
          <div className={styles.card}>
            <h1 className={styles.h1}>Title Here</h1>
            <div className={styles.visual}></div>
            <p>
              Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Sed est error repellat veritatis.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet
              beatae veritatis saepe corporis voluptates illo placeat maxime
              sapiente. Sit facere cumque quidem ad quo, dolores pariatur repudiandae
              ullam animi?
            </p>
          </div>
        </div>
      </Wrapper>
    </Fragment>
  )
}

export default Clamping
