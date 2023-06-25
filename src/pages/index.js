import * as React from "react"
import { graphql } from 'gatsby'

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import homeImg from '../img/home.png';

const HomePage = ({data}) => {
  const { markdownRemark } = data
  const { title, subtitle } = markdownRemark.frontmatter
  return (
    <section className="hero is-fullheight">
      <Navbar/>
      <div className="hero-body">
        <div className="container is-max-widescreen">
          <h1 className="title is-1">{title}</h1>
          <h1 className="title is-1">{subtitle}</h1>
          <img src={homeImg} />
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { page: { eq: "home" }}) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`

export default HomePage