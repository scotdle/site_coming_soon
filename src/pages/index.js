import React from "react"
import { graphql } from 'gatsby'
import Header from "../components/header.js"
import "../styles/styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Img from "gatsby-image"
import { Row, Col, Carousel } from "react-bootstrap"




export default (props) =>
  (
    <div className="container-fluid">
      <Row>
        <Col md={6}>
          <Img fluid={props.data.siteLogo.childImageSharp.fluid} />

          <Header headerText='Scott "Scooter" Caudle'/>
        </Col>
        < Col md={6} className="flex-grow">

          <Row>
            <Col md={12}>
              <Carousel>
                <Carousel.Item className="first_slide">

                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="second_slide">

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="third_slide">

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
export const pageQuery = graphql`
  query {
    siteLogo: file(relativePath: { eq: "sclogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `