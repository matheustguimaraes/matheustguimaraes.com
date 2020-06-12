import React from "react"

import LinkBlank from "../link-blank"
import classes from "./item.module.css"

const Item = props => (
  <h3>
    <LinkBlank href={props.href}>{props.title}</LinkBlank>
    <p className={classes.Datetime}>{props.intro ? props.intro : ""}</p>
  </h3>
)

export default Item
