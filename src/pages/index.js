import React from "react"

import LandingBio from "../components/landingBio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `Matheus T. Guimarães`,
        `Matheus Guimarães`,
        `Matheus`,
        `blog`,
        `website`,
      ]}
    />
    <LandingBio />
  </Layout>
)

export default IndexPage
