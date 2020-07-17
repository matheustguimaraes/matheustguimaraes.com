import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Emoji from "../components/emoji"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutSection from "../components/aboutSection"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query aboutSiteTitle {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="About"
          keywords={[
            `Matheus T. Guimarães`,
            `Matheus Guimarães`,
            `Matheus`,
            `blog`,
          ]}
        />
        <Content>
          <h1>About</h1>
          <p>
            Hey! I am {data.site.siteMetadata.title},{" "}
            <b>{data.site.siteMetadata.subtitle}</b>, computer vision researcher
            and computer science student from Brazil.
            {` `}
            <Emoji symbol="🇧🇷" /> <br />
            Below, I list some of the projects and publications I worked on
            recently.
          </p>
          <p>If you want to reach out by email: matheusguimr[at]gmail.com</p>
          <h2>Most recent personal projects</h2>
          <AboutSection
            title="Sr. Matuto"
            href="https://srmatuto.com"
            date="2020"
          >
            Website created to display the menu of Sr. Matuto restaurant in
            mobile devices. I made all process since buy the domain, develop the
            website to ship it.
          </AboutSection>
          <AboutSection
            title="$10 dollar shirt"
            href="https://10dollarshirt.netlify.app/"
            date="2020"
          >
            $10 dollar shirt is a website made as a joke about the complexity to
            create a website. I do not actually sell shirts.
          </AboutSection>

          <AboutSection
            title="Burger Builder"
            href="https://github.com/matheustguimaraes/burger-builder"
            date="2020"
          >
            Build a burger in the browser! Website created using React and
            Redux. Final project in React - The Complete Guide course [Not
            hosted yet]
          </AboutSection>
          <AboutSection
            title="Yelpcamp"
            href="https://yelpcamp-matheus.herokuapp.com/"
            date="2020"
          >
            Explore, comment and create campgrounds photos. Final project in The
            Web Developer Bootcamp.
          </AboutSection>
          <AboutSection
            title="The Great RGB color game"
            href="https://unruffled-panini-1427f0.netlify.app"
            date="2019"
          >
            Guess the right color just by looking at the RGB values.
          </AboutSection>
          <AboutSection
            title="The Bootstrap gallery"
            href="https://nervous-volhard-c2d0ed.netlify.app"
            date="2019"
          >
            Instagram like gallery using Bootstrap
          </AboutSection>
          <AboutSection
            title="Museum of Candy"
            href="https://musing-jackson-9eaf2f.netlify.app"
            date="2019"
          >
            Museum of Candy fictional landing page
          </AboutSection>
          <h2>Most recent publications</h2>
          <AboutSection
            title="A high-efficiency energy and storage approach for IoT applications of facial recognition"
            href="https://doi.org/10.1016/j.imavis.2020.103899"
            date="2020"
          >
            This work introduces a high-efficiency approach for face recognition
            applications based on features using a recent algorithm called Floor
            of Log (FoL). ...
          </AboutSection>

          <AboutSection
            title="A New Fast Morphological Geodesic Active Contour Method for Lung CT Image Segmentation"
            href="http://dx.doi.org/10.1016/j.measurement.2019.05.078"
            date="2019"
          >
            This work propose a new adaptive approach to lung segmentation based
            on active contour method adaptive (ACM), non-parametric and without
            previous training using the new Fuzzy Border Detector, called Fast
            Morphological Geodesic Active Contour (FGAC). ...
          </AboutSection>
        </Content>
      </Layout>
    )}
  />
)

export default IndexPage
