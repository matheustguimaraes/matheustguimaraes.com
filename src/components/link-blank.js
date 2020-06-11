import React from "react"

const LinkBlank = (props) => (
    <a
    target="_blank"
    rel="noopener noreferrer"
    href={props.href}
  >
    {props.children}
  </a>
)

export default LinkBlank;
