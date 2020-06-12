import React from "react"

import classes from "./item.module.css"

const Item = props => (
  <h3>
    <a
      className={classes.LinkA}
      target={props.blank ? "_blank" : null}
      rel={props.blank ? "noopener noreferrer" : null}
      href={props.href}
    >
      {props.title}
    </a>
    <p className={classes.Datetime}>{props.intro ? props.intro : ""}</p>
  </h3>
)

export default Item
