import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Emoji from "../components/emoji"
import Item from "../components/section/item"
import Section from "../components/section/section"
// import Image from "../components/image"

import classes from "./index.module.css"
import LinkBlank from "../components/link-blank"

const IndexPage = () => (
  <Layout>
    <SEO title="Matheus T. Guimarães | matheustguimaraes" />
    <h1>MATHEUS T. GUIMARÃES</h1>
    <h2>Hey, I'm Matheus!</h2>
    <p className={classes.Bio}>
      <b>Software Developer</b> and <b>Computer Science</b> student from Brazil.{" "}
      <Emoji symbol="🇧🇷" />
      <br />
      Currently working as a Software Developer at LAPISCO.{" "}
      <Emoji symbol="⚡" />
      <br />
      Previously worked with Computer Vision, being part of 3 research papers
      published as an undergrad student. <Emoji symbol="📜" />
    </p>
    <p className={classes.Bio}>
      Follow me on{" "}
      <LinkBlank href="https://twitter.com/matheusguimr">Twitter</LinkBlank>,{" "}
      <LinkBlank href="https://www.instagram.com/matheustguimaraes/">
        Instagram
      </LinkBlank>
      ,{" "}
      <LinkBlank href="https://www.linkedin.com/in/matheustguimaraes">
        LinkedIn
      </LinkBlank>{" "}
      and{" "}
      <LinkBlank href="http://github.com/matheustguimaraes">GitHub</LinkBlank>.
    </p>

    <Section section={<Emoji symbol="Blog 📃" />}>
      <Item
        href="posts/install-cuda-ubuntu16.html"
        title="How to install CUDA 10.0 and cuDNN v7.4.2 on ubuntu 16.04"
        intro="May 18, 2020"
      />
      <Item
        href="posts/first-blog-post.html"
        title="My first blog post"
        intro="May 18, 2020"
      />
    </Section>

    <Section section={<Emoji symbol="Projects 🚀" />}>
      <Item
        href="websites/color-game/colorGame.html"
        title="The great RGB color game"
        intro="Find the color matching the RGB values"
      />
      <Item
        href="websites/bootstrap-gallery/gallery.html"
        title="Bootstrap galery"
        intro="Instagram like gallery using only Bootstrap."
      />
      <Item
        href="https://github.com/matheustguimaraes/burger-builder"
        title="Burger Builder"
        intro="Build a burger in the browser! Website created using React and Redux.
      [Not hosted yet]"
      />
      <Item
        href="https://github.com/matheustguimaraes/yelpcamp"
        title="Yelpcamp"
        intro="Explore, comment and create campgrounds photos. [Not hosted yet]"
      />
      <Item href="projects.html" title="More..." />
    </Section>
  </Layout>
)

export default IndexPage
