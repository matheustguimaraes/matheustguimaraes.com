import React from "react"

const Section = props => (
  <div>
    <h2>{props.section}</h2>
    {props.children}
  </div>
)

export default Section
