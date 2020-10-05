import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Emoji from "./emoji"

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          {/* <Img /> */}
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>
            <b>{data.site.siteMetadata.subtitle}</b>
          </Description>
          <p>
            <Emoji symbol="👋" />
            {` `}
            Hey! My name is Matheus Guimarães. I'm a {` `}
            <b>{data.site.siteMetadata.subtitle}</b> living in Brazil
            {` `}
            <Emoji symbol="🇧🇷" />
            <br />
            Currently working as a Software Engineer intern.
            Previously, Full Stack Developer at LAPISCO.
          </p>
        </Container>
      </OuterContainer>
    )}
  />
)

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
`

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
