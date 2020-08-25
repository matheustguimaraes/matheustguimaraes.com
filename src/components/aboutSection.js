import React from "react"
import styled from "@emotion/styled"

import LinkBlank from "./linkBlank"

const aboutSection = props => (
  <div>
    <GatsbyLink href={props.href}>
      <MarkerHeader>{props.title} </MarkerHeader>
    </GatsbyLink>
    <div>
      <PostDate>{props.date}</PostDate>
    </div>
    <p>{props.children ? props.children : ""}</p>
  </div>
)

const PostDate = styled.h5`
  display: inline;
  color: black;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(120, 255, 0, 0.15),
    rgba(255, 0, 0, 80) 100%,
    rgba(255, 0, 0, 80)
  );
`

const GatsbyLink = styled(LinkBlank)`
  margin-left: 5px;
  text-decoration: none;
  color: inherit;
`

export default aboutSection
