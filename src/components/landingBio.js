import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

// import AboutSection from "../components/aboutSection"
// import Emoji from "./emoji"

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
          {/* <Description>
            <b>{data.site.siteMetadata.subtitle}</b>
          </Description> */}
          <br />
          <p>
            Hey! I'm <b>founder</b> of <a href="https://qrlinks.co">QRlinks</a>.
            <br />
            Currently working as a Software Engineer Intern at Insight Data
            Science Lab. Previously, Full Stack Developer, Machine Learning
            researcher, Embeeded Systems developer and Computer Science student.
          </p>
        </Container>
      </OuterContainer>
    )}
  />
)

const Container = styled.div`
  text-align: center;
`
// const Content = styled.div`
//   margin: 0 auto;
//   max-width: 860px;
//   padding: 1.45rem 1.0875rem;
// `

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

// const Description = styled.p`
//   padding: 0;
//   margin-bottom: 1rem;
//   font-size: 1.4rem;
// `

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
