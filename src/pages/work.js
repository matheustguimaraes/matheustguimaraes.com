import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutSection from "../components/aboutSection"
import AboutPaper from "../components/aboutPaper"
// import LinkBlank from "../components/linkBlank"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query aboutProjectss {
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
            `work`,
          ]}
        />
        <Content>
          <p>To ask about any project, email me at matheusguimr[at]gmail.com</p>

          <h1>Freelance projects and products</h1>

          <AboutSection
            title="Sr. Matuto"
            href="https://srmatuto.com"
            date="2020"
            metrics="400 visits / month"
          >
            Website created to display the menu of Sr. Matuto restaurant in
            mobile devices. I made all process since buy the domain, develop the
            website to ship it.
          </AboutSection>

          <AboutSection
            title="Multi Biometric Platform and Intelligent Monitoring"
            href="#"
            date="2020"
          >
            Partnership between LAPISCO and Ceará state government to create a
            system called ‘Multi Biometric Platform and Intelligent Monitoring
            (from Portuguese: Plataforma Multi Biométrica e Monitoramento
            Inteligente)’. I was part of the Face Recognition team.
          </AboutSection>

          <AboutSection title="Vigilante Virtual Locktec" href="#" date="2019">
            Partnership between LAPISCO and Ceará state government to create a
            system called ‘Vigilante Virtual Locktec. I was part of the Face
            Recognition team.
          </AboutSection>

          <AboutSection title="Watchcam" href="#" date="2019">
            SaaS application to monitor cameras and applications in servers,
            using RestAPI written in Python 3, services can be added to Watchcam
            monitor and log operations. [Not launched yet]
          </AboutSection>

          <AboutSection title="[REDACTED]" href="#" date="2020">
            [Not launched yet]
          </AboutSection>

          <h1>Personal projects</h1>

          <AboutSection
            title="NoticiasUFC bot"
            href="https://t.me/noticiasUFC"
            date="2020"
            metrics="125+ users subscribed"
          >
            News channel of the Federal University of Ceará (UFC). The channel's
            news are collected from the page www.ufc.br/noticias and sent to
            this channel by a bot.
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
            title="Yelpcamp"
            href="https://yelpcamp-matheus.herokuapp.com/"
            date="2019"
          >
            Explore, comment and create campgrounds photos. Final project in The
            Web Developer Bootcamp.
          </AboutSection>

          <AboutSection
            title="Burger Builder"
            href="https://github.com/matheustguimaraes/burger-builder"
            date="2019"
          >
            Build a burger in the browser! Website created using React and
            Redux. Final project in React - The Complete Guide course [Not
            hosted yet]
          </AboutSection>

          <AboutSection
            title="The Great RGB color game"
            href="https://unruffled-panini-1427f0.netlify.app"
            date="2018"
          >
            Guess the right color just by looking at the RGB values.
          </AboutSection>

          <AboutSection
            title="The Bootstrap gallery"
            href="https://nervous-volhard-c2d0ed.netlify.app"
            date="2018"
          >
            Instagram like gallery using Bootstrap
          </AboutSection>

          <AboutSection
            title="Museum of Candy"
            href="https://musing-jackson-9eaf2f.netlify.app"
            date="2017"
          >
            Museum of Candy fictional landing page
          </AboutSection>

          <h1>Most recent scientific publications</h1>

          <p>
            Most of papers covers topics like Machine Learning Computer Vision
            and Medical imaging segmantion
          </p>

          <AboutPaper
            title="An Optimized Approach to Huntington's Disease Detecting via Audio Signals Processing with Dimensionality Reduction "
            href="https://doi.org/10.1109/IJCNN48605.2020.9206773"
            date="2020"
          ></AboutPaper>
          <AboutPaper
            title="Fast fully automatic skin lesions segmentation probabilistic with Parzen window"
            href="https://doi.org/10.1016/j.compmedimag.2020.101774"
            date="2020"
          ></AboutPaper>
          <AboutPaper
            title="A high-efficiency energy and storage approach for IoT applications of facial recognition"
            href="https://doi.org/10.1016/j.imavis.2020.103899"
            date="2020"
          ></AboutPaper>
          <AboutPaper
            title="A New Fast Morphological Geodesic Active Contour Method for Lung CT Image Segmentation"
            href="http://dx.doi.org/10.1016/j.measurement.2019.05.078"
            date="2019"
          ></AboutPaper>
        </Content>
      </Layout>
    )}
  />
)

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

export default IndexPage
