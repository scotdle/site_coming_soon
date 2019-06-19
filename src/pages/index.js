import React from "react"
import { graphql } from 'gatsby'
import Header from "../components/header/header.js"
import ScootersCarousel from "../components/carousel/carousel.js"
import "../styles/styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Img from "gatsby-image"
import { Row, Col, Container } from "react-bootstrap"


export default (props) =>
  (
<Container fluid='true' className = "p-0">
      <Row>
        <Col md={6}>

          <Img fixed={props.data.siteLogo.childImageSharp.fixed} />
          <Header textInHeader='Scott Caudle' comingSoon= "site coming soon..in the meantime, be sure to check out the slideshow!"/>

        </Col>

        <Col md={6} className="flex-grow slideshow">

          <Row>
            <Col md={12}>

              <ScootersCarousel/>

            </Col>
          </Row>
        </Col>
      </Row>
</Container>
  );
export const pageQuery = graphql`
  query {
    siteLogo: file(relativePath: { eq: "sclogo.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `