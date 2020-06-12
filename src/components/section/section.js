import React from "react"

import classes from './section.module.css'

const Section = props => (
  <div style={classes}>
    <h2>{props.section}</h2>
    {props.children}
  </div>
)

export default Section
