import React from "react"

import classes from "./link.module.css"

const LinkBlank = props => (
  <a
    className={classes.LinkA}
    target="_blank"
    rel="noopener noreferrer"
    href={props.href}
  >
    {props.children}
  </a>
)

export default LinkBlank
