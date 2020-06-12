import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Emoji from "../components/emoji"
import LinkBlank from "../components/links/link-blank"
import LinkSocialMedia from "../components/links/link-social-media"
import Section from "../components/section/section"
// import Image from "../components/image"

import "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Matheus T. Guimarães | matheustguimaraes" />
    <h1>MATHEUS T. GUIMARÃES</h1>
    <h2>Hey, I'm Matheus!</h2>
    <p>
      <b>Software Developer</b> and <b>Computer Science</b> student from Brazil.{" "}
      <Emoji symbol="🇧🇷" />
      <br />
      Currently working as a Software Developer at LAPISCO.{" "}
      <Emoji symbol="⚡" />
      <br />
      Previously worked with Computer Vision, being part of 3 research papers
      published as an undergrad student. <Emoji symbol="📜" />
    </p>
    <p>
      Follow me on{" "}
      <LinkSocialMedia href="https://twitter.com/matheusguimr" name="Twitter" />
      ,{" "}
      <LinkSocialMedia
        href="https://www.instagram.com/matheustguimaraes/"
        name="Instagram"
      />
      ,{" "}
      <LinkSocialMedia
        href="https://www.linkedin.com/in/matheustguimaraes"
        name="LinkedIn"
      />{" "}
      and{" "}
      <LinkSocialMedia
        href="http://github.com/matheustguimaraes"
        name="GitHub"
      />
      .
    </p>

    <Section section={<Emoji symbol="Blog 📃" />}>
      <LinkBlank
        href="posts/install-cuda-ubuntu16.html"
        title="How to install CUDA 10.0 and cuDNN v7.4.2 on ubuntu 16.04"
        intro="May 18, 2020"
      />
      <LinkBlank
        href="posts/first-blog-post.html"
        title="My first blog post"
        intro="May 18, 2020"
      />
    </Section>

    <Section section={<Emoji symbol="Projects 🚀" />}>
      <LinkBlank
        href="websites/color-game/colorGame.html"
        title="The great RGB color game"
        intro="Find the color matching the RGB values"
      />
      <LinkBlank
        href="websites/bootstrap-gallery/gallery.html"
        title="Bootstrap galery"
        intro="Instagram like gallery using only Bootstrap."
      />
      <LinkBlank
        href="https://github.com/matheustguimaraes/burger-builder"
        title="Burger Builder"
        intro="Build a burger in the browser! Website created using React and Redux.
      [Not hosted yet]"
      />
      <LinkBlank
        href="https://github.com/matheustguimaraes/yelpcamp"
        title="Yelpcamp"
        intro="Explore, comment and create campgrounds photos. [Not hosted yet]"
      />
      <LinkBlank href="projects.html" title="More..." />
    </Section>
  </Layout>
)

export default IndexPage
