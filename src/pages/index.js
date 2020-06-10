import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Matheus T. Guimarães | matheustguimaraes" />
    <h1>MATHEUS T. GUIMARÃES</h1>
    <h2>Hey, I'm Matheus!</h2>
    <p>
      <b>Software Developer</b> and <b>Computer Science</b> student from Brazil.
      🇧🇷
      <br />
      Currently working as a Software Developer at LAPISCO. ⚡ <br />
      Previously worked with Computer Vision, being part of 3 research papers
      published as an undergrad student. 📜
    </p>
    <p class="bio">
      Follow me on{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/matheusguimr"
      >
        Twitter
      </a>
      ,{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/matheustguimaraes/"
      >
        Instagram
      </a>
      ,{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/matheustguimaraes"
      >
        LinkedIn
      </a>{" "}
      and{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://github.com/matheustguimaraes"
      >
        GitHub
      </a>
      .
    </p>
    <h2>Blog 📃</h2>
    <h3>
      <a href="posts/install-cuda-ubuntu16.html">
        How to install CUDA 10.0 and cuDNN v7.4.2 on ubuntu 16.04
      </a>
      <p id="datetime">May 18, 2020</p>
    </h3>
    <h3>
      <a href="posts/first-blog-post.html">My first blog post</a>
      <p id="datetime">May 18, 2020</p>
    </h3>
    <h2>Projects 🚀</h2>
    <h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="websites/color-game/colorGame.html"
      >
        The great RGB color game
      </a>
      <p id="datetime">Find the color matching the RGB values.</p>
    </h3>
    <h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="websites/bootstrap-gallery/gallery.html"
      >
        Bootstrap galery
      </a>
      <p id="datetime">Instagram like gallery using only Bootstrap.</p>
    </h3>
    <h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/matheustguimaraes/burger-builder"
      >
        Burger Builder
      </a>
      <p id="datetime">
        Build a burger in the browser! Website created using React and Redux.
        [Not hosted yet]
      </p>
    </h3>

    <h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/matheustguimaraes/yelpcamp"
      >
        Yelpcamp
      </a>
      <p id="datetime">
        Explore, comment and create campgrounds photos. [Not hosted yet]
      </p>
    </h3>
    <h3>
      <a href="projects.html">And more...</a>
    </h3>
  </Layout>
)

export default IndexPage
