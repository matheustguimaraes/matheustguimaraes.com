import React from "react"

const LinkBlank = props => (
  <h3>
    <a
      target={props.blank ? "_blank" : null}
      rel={props.blank ? "noopener noreferrer" : null}
      href={props.href}
    >
      {props.title}
    </a>
    <p>{props.intro ? props.intro : ""}</p>
  </h3>
)

export default LinkBlank
