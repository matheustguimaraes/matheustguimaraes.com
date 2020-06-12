import React from "react"

const LinkSocialMedia = (props) => (
    <a
    target="_blank"
    rel="noopener noreferrer"
    href={props.href}
  >
    {props.name}
  </a>
)

export default LinkSocialMedia;
