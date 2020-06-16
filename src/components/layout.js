/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import LinkBlank from "./linkBlank"
import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled(LinkBlank)`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            <p>
              {/* © {new Date().getFullYear()},  */}
              follow me on{` `}
              <GatsbyLink href="https://twitter.com/matheusguimr">
                twitter
              </GatsbyLink>
              ,{` `}
              <GatsbyLink href="https://www.instagram.com/matheustguimaraes">
                instagram
              </GatsbyLink>
              {/* ,{` `}
              <GatsbyLink href="https://www.linkedin.com/in/matheustguimaraes">
                linkedin
              </GatsbyLink> */}
              {` `} and {` `}
              <GatsbyLink href="http://github.com/matheustguimaraes">
                github
              </GatsbyLink>
              .
            </p>
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
