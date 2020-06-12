import React from "react"

// import LinkBlank from "../link-blank"
import classes from "./item.module.css"
import { Link } from "gatsby"

const Item = props => (
  <h3>
    <Link className={classes.LinkA} to={props.href}>{props.title}</Link>
    <p className={classes.Datetime}>{props.intro ? props.intro : ""}</p>
  </h3>
)

export default Item
